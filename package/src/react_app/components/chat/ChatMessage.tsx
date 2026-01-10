import React, { useMemo, useCallback } from "react";
import styles from "./ChatMessage.module.scss";
import type { ChatMessage as ChatMessageType, ActionEvent } from "./types";
import { 
  GenUIRenderer, 
  parseGenUIResponse, 
  isGenUIContent, 
  extractPlainText,
  type ActionProps,
} from "./genui";

interface ChatMessageProps {
  message: ChatMessageType;
  onAction?: (event: ActionEvent) => void;
  onUpdateMessage?: (content: string) => void;
}

/**
 * Renders a single chat message
 * - User messages: Simple styled text
 * - Assistant messages: GenUI components or plain text
 */
export const ChatMessage: React.FC<ChatMessageProps> = ({
  message,
  onAction,
  onUpdateMessage: _onUpdateMessage,
}) => {
  const isUser = message.role === "user";
  const isAssistant = message.role === "assistant";

  // Check if content contains GenUI markup (even while streaming)
  const hasGenUIContent = useMemo(() => {
    return message.content ? isGenUIContent(message.content) : false;
  }, [message.content]);

  // Parse GenUI response from message content (only when not streaming)
  const genUIData = useMemo(() => {
    if (!message.content || message.isStreaming) return null;
    if (hasGenUIContent) {
      return parseGenUIResponse(message.content);
    }
    return null;
  }, [message.content, message.isStreaming, hasGenUIContent]);

  // Extract any plain text before GenUI content
  const plainTextBefore = useMemo(() => {
    if (!message.content) return '';
    return extractPlainText(message.content);
  }, [message.content]);

  // Handle GenUI actions and convert to ActionEvent format
  const handleGenUIAction = useCallback((action: ActionProps, formData?: Record<string, unknown>) => {
    if (!onAction) return;
    
    // Convert GenUI action to ActionEvent format
    const event: ActionEvent = {
      type: action.type,
      params: {
        ...action.props,
        formData,
      },
    };

    console.log("event", event);
    console.log("formData", formData);
    
    onAction(event);
  }, [onAction]);

  // Render assistant content with GenUI support
  const renderAssistantContent = () => {
    // If streaming GenUI content, show loading indicator instead of raw markup
    if (message.isStreaming && hasGenUIContent) {
      return (
        <>
          {plainTextBefore && (
            <div className={styles.textContent}>{plainTextBefore}</div>
          )}
          <div className={styles.genUILoading}>
            <div className={styles.streamingIndicator}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <span>Generating interface...</span>
          </div>
        </>
      );
    }

    // If we have parsed GenUI data, render it
    if (genUIData?.component) {
      return (
        <>
          {plainTextBefore && (
            <div className={styles.textContent}>{plainTextBefore}</div>
          )}
          <GenUIRenderer 
            component={genUIData.component} 
            onAction={handleGenUIAction}
          />
        </>
      );
    }

    // Otherwise, render as plain text
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
