import React, { useCallback, useRef, useEffect } from "react";
import { useShallow } from "zustand/react/shallow";
import { ChatComposer } from "./ChatComposer";
import { ChatMessage } from "./ChatMessage";
import { EditPromptModal } from "./EditPromptModal";
import type { PendingAction, ActionEvent } from "./types";
import { useChatContextStore, type ChatContext, type ChatMessageType } from "@/react_app/store/chatContextStore";
import { useVariablesStore } from "@/react_app/store/variablesStore";
import { createSectionChatActionHandler } from "./SectionChatActions";
import { getComponentInstruction } from "./genui/componentConfig";
import { LeverageLoopSummary } from "../leverage_loop/LeverageLoopChatSummary";
import { CopilotEmptyState } from "../shared/CopilotEmptyState";
import styles from "../CopilotChat.module.scss";
// Generate unique IDs
export const generateId = () => `msg-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

interface SectionChatProps {
  context: ChatContext;
  title: string;
  subtitle?: string;
  systemPrompt?: string;
  showComposer?: boolean;
}

/**
 * SectionChat Component
 *
 * A reusable chat component that maintains separate state for each context.
 * Used by Copilot, Outcomes, and Leverage Loops sections.
 */
export const SectionChat: React.FC<SectionChatProps> = ({
  context,
  systemPrompt,
  showComposer = true,
}) => {
  const {
    chatState,
    addMessage,
    updateMessage,
    setIsLoading,
    upsertLeverageLoopSummary,
    selectedPerson,
    selectedSuggestionRequest,
  } = useChatContextStore(
    useShallow((state) => {
      // For leverage-loops, use the keyed chat state based on current selection
      if (context === "leverage-loops") {
        return {
          chatState: state.getCurrentLeverageLoopChat(),
          addMessage: state.addMessage,
          updateMessage: state.updateMessage,
          setIsLoading: state.setIsLoading,
          upsertLeverageLoopSummary: state.upsertLeverageLoopSummary,
          selectedPerson: state.selectedPerson,
          selectedSuggestionRequest: state.selectedSuggestionRequest,
        };
      }
      
      const chatKey = context === "copilot" ? "copilotChat" : "outcomesChat";
      return {
        chatState: state[chatKey],
        addMessage: state.addMessage,
        updateMessage: state.updateMessage,
        setIsLoading: state.setIsLoading,
        upsertLeverageLoopSummary: state.upsertLeverageLoopSummary,
        selectedPerson: state.selectedPerson,
        selectedSuggestionRequest: state.selectedSuggestionRequest,
      };
    })
  );

  function cleanDocumentContent(rawContent: string) {
    // Extract the SUMMARY section

      const summaryMatch = rawContent.match(/\[SUMMARY\](.*?)\[\/SUMMARY\]/s);
      let summary = null;
      if (summaryMatch && summaryMatch[1]) {
        summary = summaryMatch[1].trim();
        // Remove the SUMMARY section and everything after it
        // let cleanedContent = rawContent.replace(/\[SUMMARY\].*$/s, '').trim();
        let cleanedContent = rawContent.replace(/\[SUMMARY\].*$/s, '</content>').trim();
        
        if (summary && context === "leverage-loops") {
          updateLeverageLoopSummary(summary);
        }
        // If there's no SUMMARY section, just use the original content
        if (!summaryMatch) {
          cleanedContent = rawContent;
        }
        
        return {
          cleanContent: cleanedContent
        };
      }
      
      return {
        cleanContent: rawContent
      };
    }
  

  /**
   * Update leverage loop summary in the store
   */
  const updateLeverageLoopSummary = useCallback((summary: string) => {
    if (context !== "leverage-loops") return;
    
    let summaryId: string | null = null;
    if (selectedPerson) {
      summaryId = selectedPerson.full_name;
    } else if (selectedSuggestionRequest) {
      summaryId = selectedSuggestionRequest.request_header_title;
    }
    
    if (summaryId && summary) {
      upsertLeverageLoopSummary({
        id: summaryId,
        content: summary,
        timestamp: new Date(),
      });
    }
  }, [context, selectedPerson, selectedSuggestionRequest, upsertLeverageLoopSummary]);

  const { messages, threadId, isLoading } = chatState;
  
  // Leverage loop summary card should show if there are messages and no person or suggestion request is selected and the last message is not a system message
  const shouldShowLeverageLoopSummaryCard = context === "leverage-loops" && messages.length > 1 ;
  
  // Modal state for editing form submissions
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [pendingAction, setPendingAction] = React.useState<PendingAction | null>(null);

  // Ref for auto-scroll
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  /**
   * Send a message to the API and stream the response
   */
  const sendMessage = useCallback(
    async (content: string) => {
      if (!content.trim() || isLoading) return;

      const userMessage: ChatMessageType = {
        id: generateId(),
        role: "user",
        content: content.trim(),
        timestamp: new Date(),
      };

      // Add user message to state
      addMessage(context, userMessage);
      setIsLoading(context, true);

      // Create placeholder for assistant response
      const responseId = generateId();
      const assistantMessage: ChatMessageType = {
        id: responseId,
        role: "assistant",
        content: "",
        timestamp: new Date(),
        isStreaming: true,
      };

      addMessage(context, assistantMessage);

      try {
        // Build the prompt with system context and component restrictions
        const componentRestriction = getComponentInstruction();
        const basePrompt = systemPrompt || "You are a helpful AI assistant.";
        const promptContent = `${basePrompt}\n\n${componentRestriction}\n\nUser: ${content.trim()}`;

        // Get the LLM endpoint from the variables store
        const { copilot_llm_endpoint } = useVariablesStore.getState();
        const apiUrl = copilot_llm_endpoint || "http://localhost:3001";
        
        const response = await fetch(`${apiUrl}/api/chat`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            prompt: {
              role: "user",
              content: promptContent,
              id: userMessage.id,
            },
            threadId,
            responseId,
            context, // Pass context to backend if needed
          }),
        });

        if (!response.ok) {
          throw new Error(`API error: ${response.status}`);
        }

        // Read streaming response
        const reader = response.body?.getReader();
        const decoder = new TextDecoder();
        let accumulatedContent = "";

        if (reader) {
          while (true) {
            const { done, value } = await reader.read();
            if (done) break;

            const chunk = decoder.decode(value, { stream: true });
            accumulatedContent += chunk;

            // During streaming, extract clean content (same logic as final extraction)
            // This ensures content shows correctly even if summary appears first
            const { cleanContent: streamingCleanContent } = cleanDocumentContent(accumulatedContent);
            
            // Use the clean content for display, or fallback to raw if no summary found yet
            const contentToShow = streamingCleanContent || accumulatedContent;
            updateMessage(context, responseId, contentToShow, true);
          }
        }

        // After streaming complete, extract summary and update store
        const { cleanContent } = cleanDocumentContent(accumulatedContent);
        
        // Mark streaming as complete with clean content (without summary tags)
        updateMessage(context, responseId, cleanContent, false);

      } catch (error) {
        console.error("Failed to send message:", error);
        // Update message with error
        updateMessage(
          context,
          responseId,
          "Sorry, there was an error processing your request.",
          false
        );
      } finally {
        setIsLoading(context, false);
      }
    },
    [isLoading, threadId, context, systemPrompt, addMessage, updateMessage, setIsLoading, cleanDocumentContent, updateLeverageLoopSummary]
  );

  /**
   * Handle actions from custom components (forms, buttons, etc.)
   */
  const handleAction = useCallback(
    (event: ActionEvent) => {
      const handler = createSectionChatActionHandler({
        sendMessage,
        setPendingAction,
        setIsModalOpen,
        context,
        addMessage,
        updateMessage,
      });
      handler(event);
    },
    [sendMessage, setPendingAction, setIsModalOpen, context, addMessage, updateMessage]
  );

  /**
   * Handle message update (for state persistence)
   */
  const handleUpdateMessage = useCallback(
    (messageId: string, content: string) => {
      updateMessage(context, messageId, content);
    },
    [context, updateMessage]
  );

  /**
   * Handle modal confirmation - send the edited message
   */
  const handleModalConfirm = useCallback(
    (editedMessage: string) => {
      setIsModalOpen(false);
      setPendingAction(null);
      sendMessage(editedMessage);
    },
    [sendMessage]
  );

  /**
   * Handle modal cancel
   */
  const handleModalClose = useCallback(() => {
    setIsModalOpen(false);
    setPendingAction(null);
  }, []);

  return (
    <div className={styles.chatContainer}>

      {shouldShowLeverageLoopSummaryCard && (
        <LeverageLoopSummary
          onSendMessage={sendMessage}
          isLoading={isLoading}
        />
      )}

      {/* Messages */}
      <div className={styles.messagesContainer}>
        {messages.length === 0 ? (
          context === "copilot" ? (
            <CopilotEmptyState  subtext="What can I help you with today?"/>
          ) : (
            <div className={styles.emptyState}>
              <p>Start a conversation</p>
            </div>
          )
        ) : (
          messages.map((message) => (
            <ChatMessage
              key={message.id}
              message={message}
              onAction={handleAction}
              onUpdateMessage={(content) => handleUpdateMessage(message.id, content)}
            />
          ))
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      {showComposer && <ChatComposer onSend={sendMessage} disabled={isLoading} />}

      {/* Edit Modal */}
      {pendingAction && (
        <EditPromptModal
          isOpen={isModalOpen}
          onClose={handleModalClose}
          humanFriendlyMessage={pendingAction.humanFriendlyMessage}
          llmFriendlyMessage={pendingAction.llmFriendlyMessage}
          onConfirm={handleModalConfirm}
        />
      )}
    </div>
  );
};


