import React, { useState, useEffect } from "react";
import styles from "./EditMessageModal.module.scss";

interface EditMessageModalProps {
  isOpen: boolean;
  onClose: () => void;
  humanFriendlyMessage: string;
  llmFriendlyMessage: string;
  onConfirm: (editedMessage: string) => void;
}

/**
 * Modal for editing the LLM-friendly message before sending to the API
 * Shows the human-friendly message as context and allows editing the LLM message
 */
export const EditMessageModal: React.FC<EditMessageModalProps> = ({
  isOpen,
  onClose,
  humanFriendlyMessage,
  llmFriendlyMessage,
  onConfirm,
}) => {
  const [editedMessage, setEditedMessage] = useState(llmFriendlyMessage);

  useEffect(() => {
    setEditedMessage(llmFriendlyMessage);
  }, [llmFriendlyMessage]);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
      return () => window.removeEventListener("keydown", handleEscape);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editedMessage.trim()) {
      onConfirm(editedMessage.trim());
    }
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <h2>Edit Your Response</h2>
          <button className={styles.closeButton} onClick={onClose}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className={styles.selectedInfo}>
            <label>Your Selection:</label>
            <p>{humanFriendlyMessage}</p>
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="editMessage">Edit prompt before sending:</label>
            <textarea
              id="editMessage"
              className={styles.textarea}
              value={editedMessage}
              onChange={(e) => setEditedMessage(e.target.value)}
              placeholder="Edit your message..."
              rows={4}
              autoFocus
            />
          </div>

          <div className={styles.modalActions}>
            <button
              type="button"
              className={styles.cancelButton}
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className={styles.confirmButton}
              disabled={!editedMessage.trim()}
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

