import React, { useState, useCallback, useRef, useEffect } from "react";
import {
  ChatComposer,
  ChatMessage,
  EditPromptModal,
  type ChatMessageType,
  type PendingAction,
  type ActionEvent,
} from "./chat";
import styles from "./CopilotChat.module.scss";

// Get API URL from environment variable, with fallback for development
const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3001";

interface CopilotChatProps {
  agentName?: string;
  logoUrl?: string;
}

// Generate unique IDs
const generateId = () => `msg-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

/**
 * CopilotChat Component
 *
 * This implementation gives you full control over:
 * - Conversation state management
 * - Form/action interception and editing
 * - Custom UI design
 *
 * Uses custom React components for rendering messages
 */
export const CopilotChat: React.FC<CopilotChatProps> = ({
  agentName = "Copilot",
}) => {
  // Conversation state
  const [messages, setMessages] = useState<ChatMessageType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [threadId] = useState(() => `thread-${Date.now()}`);

  // Modal state for editing form submissions
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pendingAction, setPendingAction] = useState<PendingAction | null>(null);

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
      setMessages((prev) => [...prev, userMessage]);
      setIsLoading(true);

      // Create placeholder for assistant response
      const responseId = generateId();
      const assistantMessage: ChatMessageType = {
        id: responseId,
        role: "assistant",
        content: "",
        timestamp: new Date(),
        isStreaming: true,
      };

      setMessages((prev) => [...prev, assistantMessage]);

      try {
        const response = await fetch(`${API_BASE_URL}/api/chat`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            prompt: {
              role: "user",
              content: content.trim(),
              id: userMessage.id,
            },
            threadId,
            responseId,
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
            setMessages((prev) =>
              prev.map((msg) =>
                msg.id === responseId
                  ? { ...msg, content: accumulatedContent }
                  : msg
              )
            );
          }
        }

        // Mark streaming as complete
        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === responseId ? { ...msg, isStreaming: false } : msg
          )
        );
      } catch (error) {
        console.error("Failed to send message:", error);
        // Update message with error
        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === responseId
              ? {
                  ...msg,
                  content: "Sorry, there was an error processing your request.",
                  isStreaming: false,
                }
              : msg
          )
        );
      } finally {
        setIsLoading(false);
      }
    },
    [isLoading, threadId]
  );

  /**
   * Handle actions from custom components (forms, buttons, etc.)
   * This is where you have full control!
   */
  const handleAction = useCallback(
    (event: ActionEvent) => {
      console.log("Action received:", event);

      switch (event.type) {
        case "continue_conversation":
          // Form submission - intercept and allow editing
          if (event.params) {
            const { humanFriendlyMessage, llmFriendlyMessage } = event.params;
            if (humanFriendlyMessage && llmFriendlyMessage) {
              // Show edit modal instead of auto-sending
              setPendingAction({
                humanFriendlyMessage: humanFriendlyMessage as string,
                llmFriendlyMessage: llmFriendlyMessage as string,
              });
              setIsModalOpen(true);
            }
          }
          break;

        case "open_url":
          // Open URL in new tab
          if (event.params?.url) {
            window.open(event.params.url as string, "_blank", "noopener,noreferrer");
          }
          break;

        default:
          // Handle custom actions here
          console.log("Unhandled action type:", event.type);
      }
    },
    []
  );

  /**
   * Handle message update (for state persistence)
   */
  const handleUpdateMessage = useCallback((messageId: string, content: string) => {
    setMessages((prev) =>
      prev.map((msg) => (msg.id === messageId ? { ...msg, content } : msg))
    );
  }, []);

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
        <h1>{agentName}</h1>
      </div>

      {/* Messages */}
      <div className={styles.messagesContainer}>
        {messages.length === 0 ? (
          <div className={styles.emptyState}>
            <p>Start a conversation with {agentName}</p>
          </div>
        ) : (
          messages.map((message) => (
            <ChatMessage
              key={message.id}
              message={message}
              onAction={handleAction}
              onUpdateMessage={(content) =>
                handleUpdateMessage(message.id, content)
              }
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
