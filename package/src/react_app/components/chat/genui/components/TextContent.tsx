import React from 'react';
import type { TextContentProps } from '../types';
import styles from '../GenUI.module.scss';

// Simple markdown-like parser (handles basic formatting)
function parseMarkdown(text: string): React.ReactNode {
  // Split by paragraphs
  const paragraphs = text.split(/\n\n+/);
  
  return paragraphs.map((paragraph, index) => {
    // Handle bold text **text**
    let content: React.ReactNode = paragraph;
    const boldPattern = /\*\*(.*?)\*\*/g;
    const parts = paragraph.split(boldPattern);
    
    if (parts.length > 1) {
      content = parts.map((part, i) => {
        // Odd indices are the bold content
        if (i % 2 === 1) {
          return <strong key={i}>{part}</strong>;
        }
        return part;
      });
    }
    
    // Handle inline code `code`
    const codePattern = /`(.*?)`/g;
    if (typeof content === 'string' && content.match(codePattern)) {
      const codeParts = content.split(codePattern);
      content = codeParts.map((part, i) => {
        if (i % 2 === 1) {
          return <code key={i}>{part}</code>;
        }
        return part;
      });
    }
    
    return <p key={index}>{content}</p>;
  });
}

export const TextContent: React.FC<TextContentProps> = ({ textMarkdown }) => {
  return (
    <div className={styles.textContent}>
      {parseMarkdown(textMarkdown)}
    </div>
  );
};

