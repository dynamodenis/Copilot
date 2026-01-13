import React, { useMemo, useCallback } from "react";
import styles from "./ChatMessage.module.scss";
import type { ChatMessage as ChatMessageType, ActionEvent } from "./types";
import { 
  GenUIRenderer,
  StreamingGenUIRenderer,
  parseGenUIResponse, 
  isGenUIContent, 
  extractPlainText,
  parseStreamingGenUI,
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

  // Parse GenUI response from message content
  // During streaming, try to parse incrementally
  const genUIData = useMemo(() => {
    if (!message.content) return null;
    
    if (hasGenUIContent) {
      // If streaming, try incremental parsing
      if (message.isStreaming) {
        const streamingResult = parseStreamingGenUI(message.content);
        if (streamingResult?.component) {
          return streamingResult;
        }
        return null;
      }
      // If not streaming, use full parser
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
    // If we have GenUI content (streaming or complete), use streaming renderer
    if (hasGenUIContent) {
      return (
        <>
          {plainTextBefore && (
            <div className={styles.textContent}>{plainTextBefore}</div>
          )}
          <StreamingGenUIRenderer
            content={message.content}
            isStreaming={message.isStreaming || false}
            onAction={handleGenUIAction}
          />
        </>
      );
    }

    // If we have parsed GenUI data (non-streaming), render it
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
