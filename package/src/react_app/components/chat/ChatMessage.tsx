import React from "react";
import styles from "./ChatMessage.module.scss";
import type { ChatMessage as ChatMessageType, ActionEvent } from "./types";

interface ChatMessageProps {
  message: ChatMessageType;
  onAction?: (event: ActionEvent) => void;
  onUpdateMessage?: (content: string) => void;
}

/**
 * Renders a single chat message
 * - User messages: Simple styled text
 * - Assistant messages: Plain text (you can add custom Gen UI components here)
 */
export const ChatMessage: React.FC<ChatMessageProps> = ({
  message,
  // These props are available for custom Gen UI components
  onAction: _onAction,
  onUpdateMessage: _onUpdateMessage,
}) => {
  const isUser = message.role === "user";
  const isAssistant = message.role === "assistant";

  // Example: Parse message content for custom Gen UI components
  // You can implement your own parsing logic here
  const renderAssistantContent = () => {
    // For now, render as plain text
    // TODO: Add your custom Gen UI component rendering logic here
    // Example: Parse JSON from API and render custom components
    return (
      <div className={styles.textContent}>
        {message.content || (message.isStreaming ? "" : "No response")}
      </div>
    );
  };

  return (
    <div
      className={`${styles.messageContainer} ${
        isUser ? styles.user : styles.assistant
      }`}
    >
      {isUser ? (
        <div className={styles.userMessage}>
          <p>{message.content}</p>
        </div>
      ) : isAssistant ? (
        <div className={styles.assistantMessage}>
          {message.isStreaming && !message.content && (
            <div className={styles.streamingIndicator}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          )}
          {renderAssistantContent()}
        </div>
      ) : null}
    </div>
  );
};
