import React from 'react';
import type { TextContentProps } from '../types';
import styles from '../GenUI.module.scss';

// Parse inline formatting (bold, code)
function parseInlineFormatting(text: string): React.ReactNode {
  // Handle bold text **text**
  const boldPattern = /\*\*(.*?)\*\*/g;
  const parts = text.split(boldPattern);
  
  if (parts.length > 1) {
    return parts.map((part, i) => {
      if (i % 2 === 1) {
        return <strong key={i}>{part}</strong>;
      }
      // Handle inline code in non-bold parts
      const codePattern = /`(.*?)`/g;
      if (part.match(codePattern)) {
        const codeParts = part.split(codePattern);
        return codeParts.map((codePart, j) => {
          if (j % 2 === 1) {
            return <code key={`${i}-${j}`}>{codePart}</code>;
          }
          return codePart;
        });
      }
      return part;
    });
  }
  
  // Handle inline code `code`
  const codePattern = /`(.*?)`/g;
  if (text.match(codePattern)) {
    const codeParts = text.split(codePattern);
    return codeParts.map((part, i) => {
      if (i % 2 === 1) {
        return <code key={i}>{part}</code>;
      }
      return part;
    });
  }
  
  return text;
}

// Simple markdown-like parser (handles basic formatting)
function parseMarkdown(text: string): React.ReactNode {
  // Split by lines first
  const lines = text.split('\n');
  const elements: React.ReactNode[] = [];
  let currentList: string[] = [];
  
  const flushList = () => {
    if (currentList.length > 0) {
      elements.push(
        <ul key={`list-${elements.length}`} style={{ margin: '8px 0', paddingLeft: '20px' }}>
          {currentList.map((item, i) => (
            <li key={i} style={{ marginBottom: '4px' }}>{parseInlineFormatting(item)}</li>
          ))}
        </ul>
      );
      currentList = [];
    }
  };
  
  lines.forEach((line, index) => {
    const trimmed = line.trim();
    
    // Check for bullet points (•, -, *)
    if (trimmed.match(/^[•\-\*]\s+/)) {
      const bulletContent = trimmed.replace(/^[•\-\*]\s+/, '');
      currentList.push(bulletContent);
    } else if (trimmed === '') {
      // Empty line - flush list and add spacing
      flushList();
    } else {
      // Regular text
      flushList();
      elements.push(<p key={`p-${index}`} style={{ margin: '4px 0' }}>{parseInlineFormatting(trimmed)}</p>);
    }
  });
  
  // Flush any remaining list items
  flushList();
  
  return elements;
}

export const TextContent: React.FC<TextContentProps> = ({ textMarkdown }) => {
  return (
    <div className={styles.textContent}>
      {parseMarkdown(textMarkdown)}
    </div>
  );
};

