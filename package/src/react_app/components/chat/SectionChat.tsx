import React, { useCallback, useRef, useEffect } from "react";
import { useShallow } from "zustand/react/shallow";
import { ChatComposer } from "./ChatComposer";
import { ChatMessage } from "./ChatMessage";
import { EditPromptModal } from "./EditPromptModal";
import type { PendingAction, ActionEvent } from "./types";
import { useChatContextStore, type ChatContext, type ChatMessageType } from "@/react_app/store/chatContextStore";
import styles from "../CopilotChat.module.scss";

// Get API URL from environment variable, with fallback for development
const API_BASE_URL = import.meta.env.VITE_LLM_ENDPOINT || "http://localhost:3001";

// Generate unique IDs
const generateId = () => `msg-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

interface SectionChatProps {
  context: ChatContext;
  title: string;
  subtitle?: string;
  systemPrompt?: string;
}

/**
 * SectionChat Component
 *
 * A reusable chat component that maintains separate state for each context.
 * Used by Copilot, Outcomes, and Leverage Loops sections.
 */
export const SectionChat: React.FC<SectionChatProps> = ({
  context,
  title,
  subtitle,
  systemPrompt,
}) => {
  const {
    chatState,
    addMessage,
    updateMessage,
    setIsLoading,
  } = useChatContextStore(
    useShallow((state) => {
      const chatKey = context === "copilot" 
        ? "copilotChat" 
        : context === "outcomes" 
          ? "outcomesChat" 
          : "leverageLoopsChat";
      return {
        chatState: state[chatKey],
        addMessage: state.addMessage,
        updateMessage: state.updateMessage,
        setIsLoading: state.setIsLoading,
      };
    })
  );

  const { messages, threadId, isLoading } = chatState;

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
        // Build the prompt with system context if provided
        const promptContent = systemPrompt 
          ? `[Context: ${systemPrompt}]\n\n${content.trim()}`
          : content.trim();

        const response = await fetch(`${API_BASE_URL}/api/chat`, {
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

            // Update message content as it streams
            updateMessage(context, responseId, accumulatedContent, true);
          }
        }

        // Mark streaming as complete
        updateMessage(context, responseId, accumulatedContent, false);
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
    [isLoading, threadId, context, systemPrompt, addMessage, updateMessage, setIsLoading]
  );

  /**
   * Handle actions from custom components (forms, buttons, etc.)
   */
  const handleAction = useCallback((event: ActionEvent) => {
    console.log("Action received:", event);

    switch (event.type) {
      case "continue_conversation":
        if (event.params) {
          const { humanFriendlyMessage, llmFriendlyMessage } = event.params;
          if (humanFriendlyMessage && llmFriendlyMessage) {
            setPendingAction({
              humanFriendlyMessage: humanFriendlyMessage as string,
              llmFriendlyMessage: llmFriendlyMessage as string,
            });
            setIsModalOpen(true);
          }
        }
        break;

      case "open_url":
        if (event.params?.url) {
          window.open(event.params.url as string, "_blank", "noopener,noreferrer");
        }
        break;

      default:
        console.log("Unhandled action type:", event.type);
    }
  }, []);

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
      {/* Header */}
      <div className={styles.header}>
        <h1>{title}</h1>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>

      {/* Messages */}
      <div className={styles.messagesContainer}>
        {messages.length === 0 ? (
          <div className={styles.emptyState}>
            <p>Start a conversation</p>
          </div>
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
      <ChatComposer onSend={sendMessage} disabled={isLoading} />

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

