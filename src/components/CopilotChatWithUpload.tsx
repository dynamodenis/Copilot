"use client";

import React, { useRef, useState } from "react";
import { C1Chat } from "@thesysai/genui-sdk";
import "@crayonai/react-ui/styles/index.css";
import styles from "./CopilotChatWithUpload.module.scss";

interface CopilotChatWithUploadProps {
  apiUrl?: string;
  agentName?: string;
  logoUrl?: string;
}

interface FileAttachment {
  file: File;
  preview?: string;
  type: "image" | "document" | "audio";
}

export const CopilotChatWithUpload: React.FC<CopilotChatWithUploadProps> = ({
  apiUrl = "/api/chat",
  agentName = "Copilot",
  logoUrl,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [attachments, setAttachments] = useState<FileAttachment[]>([]);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;

    const newAttachments: FileAttachment[] = [];

    Array.from(files).forEach((file) => {
      let type: "image" | "document" | "audio";
      if (file.type.startsWith("image/")) {
        type = "image";
      } else if (file.type.startsWith("audio/")) {
        type = "audio";
      } else {
        type = "document";
      }

      const attachment: FileAttachment = {
        file,
        type,
      };

      // Create preview for images
      if (type === "image") {
        const reader = new FileReader();
        reader.onloadend = () => {
          attachment.preview = reader.result as string;
          setAttachments((prev) => [...prev, attachment]);
        };
        reader.readAsDataURL(file);
      } else {
        newAttachments.push(attachment);
      }
    });

    if (newAttachments.length > 0) {
      setAttachments((prev) => [...prev, ...newAttachments]);
    }

    // Reset input
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const removeAttachment = (index: number) => {
    setAttachments((prev) => prev.filter((_, i) => i !== index));
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className={styles.chatContainer}>
      <input
        ref={fileInputRef}
        type="file"
        multiple
        accept="image/*,audio/*,.pdf,.doc,.docx,.txt"
        onChange={handleFileSelect}
        className={styles.hiddenInput}
      />
      
      {attachments.length > 0 && (
        <div className={styles.attachmentsBar}>
          {attachments.map((attachment, index) => (
            <div key={index} className={styles.attachmentItem}>
              {attachment.type === "image" && attachment.preview ? (
                <img
                  src={attachment.preview}
                  alt={attachment.file.name}
                  className={styles.attachmentPreview}
                />
              ) : (
                <div className={styles.attachmentIcon}>
                  {attachment.type === "audio" ? "🎵" : "📄"}
                </div>
              )}
              <span className={styles.attachmentName}>
                {attachment.file.name}
              </span>
              <button
                onClick={() => removeAttachment(index)}
                className={styles.removeButton}
                aria-label="Remove attachment"
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}

      <div className={styles.chatWrapper}>
        <C1Chat
          apiUrl={apiUrl}
          formFactor="full-page"
          agentName={agentName}
          logoUrl={logoUrl}
          disableThemeProvider
        />
      </div>

      {/* File upload button overlay - Note: This is a placeholder as C1Chat manages its own input */}
      {/* For full file upload integration, you may need to customize the chat input component */}
      <div className={styles.uploadHint}>
        <button
          onClick={triggerFileInput}
          className={styles.uploadButton}
          title="Upload files (images, documents, audio)"
          aria-label="Upload files"
        >
          📎
        </button>
      </div>
    </div>
  );
};
