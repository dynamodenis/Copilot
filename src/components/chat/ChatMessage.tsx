import React from "react";
import { C1Component } from "@thesysai/genui-sdk";
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
 * - Assistant messages: Rendered with C1Component for GenUI
 */
export const ChatMessage: React.FC<ChatMessageProps> = ({
  message,
  onAction,
  onUpdateMessage,
}) => {
  const isUser = message.role === "user";
  const isAssistant = message.role === "assistant";

  // Handle action from C1Component
  const handleAction = (event: ActionEvent) => {
    console.log("C1Component action:", event);
    onAction?.(event);
  };

  // Handle message update (for state persistence)
  const handleUpdateMessage = (content: string) => {
    onUpdateMessage?.(content);
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
          {message.isStreaming ? (
            <div className={styles.streamingIndicator}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          ) : null}
          <C1Component
            c1Response={message.content}
            isStreaming={message.isStreaming ?? false}
            onAction={handleAction}
            updateMessage={handleUpdateMessage}
          />
        </div>
      ) : null}
    </div>
  );
};

