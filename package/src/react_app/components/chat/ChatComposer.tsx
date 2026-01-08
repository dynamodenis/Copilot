import React, { useState, useRef, useEffect } from "react";
import styles from "./ChatComposer.module.scss";

interface ChatComposerProps {
  onSend: (message: string) => void;
  disabled?: boolean;
  placeholder?: string;
  initialValue?: string;
}

/**
 * Custom chat input component
 * Matches the design in the screenshot with a clean, modern look
 */
export const ChatComposer: React.FC<ChatComposerProps> = ({
  onSend,
  disabled = false,
  placeholder = "Ask anything..",
  initialValue = "",
}) => {
  const [value, setValue] = useState(initialValue);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Update value when initialValue changes (for populating from modal)
  useEffect(() => {
    if (initialValue) {
      setValue(initialValue);
      // Focus the textarea
      setTimeout(() => textareaRef.current?.focus(), 0);
    }
  }, [initialValue]);

  // Auto-resize textarea
  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${Math.min(textarea.scrollHeight, 200)}px`;
    }
  }, [value]);

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (value.trim() && !disabled) {
      onSend(value.trim());
      setValue("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className={styles.composerContainer}>
      <form onSubmit={handleSubmit} className={styles.composer}>
        <div className={styles.inputWrapper}>
          <textarea
            ref={textareaRef}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            disabled={disabled}
            className={styles.input}
            rows={1}
          />
        </div>

        <div className={styles.actions}>
          <div className={styles.leftActions}>
            <button
              type="button"
              className={styles.actionButton}
              title="Attach file"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 5v14M5 12h14" />
              </svg>
            </button>
            <button
              type="button"
              className={styles.actionButton}
              title="Settings"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6" />
              </svg>
            </button>
          </div>

          <div className={styles.rightActions}>
            <button
              type="button"
              className={styles.actionButton}
              title="Voice input"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                <line x1="12" y1="19" x2="12" y2="23" />
                <line x1="8" y1="23" x2="16" y2="23" />
              </svg>
            </button>
            <button
              type="submit"
              className={`${styles.sendButton} ${
                value.trim() && !disabled ? styles.active : ""
              }`}
              disabled={!value.trim() || disabled}
              title="Send message"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 19V5M5 12l7-7 7 7" />
              </svg>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

