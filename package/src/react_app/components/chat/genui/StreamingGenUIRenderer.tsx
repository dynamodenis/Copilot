import React, { useState, useEffect } from 'react';
import type { GenUIComponentDef, ActionProps } from './types';
import { GenUIRenderer } from './GenUIRenderer';
import { parseStreamingGenUI } from './streamingParser';
import styles from './GenUI.module.scss';

interface StreamingGenUIRendererProps {
  content: string;
  isStreaming: boolean;
  onAction?: (action: ActionProps, formData?: Record<string, unknown>) => void;
}

/**
 * StreamingGenUIRenderer
 * 
 * Renders GenUI components progressively as they stream in.
 * Shows skeleton loaders while waiting for complete components.
 */
export const StreamingGenUIRenderer: React.FC<StreamingGenUIRendererProps> = ({
  content,
  isStreaming,
  onAction,
}) => {
  const [parsedComponent, setParsedComponent] = useState<GenUIComponentDef | null>(null);

  // Parse content incrementally - update on every content change
  useEffect(() => {
    if (!content) {
      setParsedComponent(null);
      return;
    }

    // Try to parse the streaming content - this now extracts components aggressively
    const result = parseStreamingGenUI(content);
    
    if (result?.component) {
      const component = result.component;
      
      // The parseStreamingGenUI returns: { component: { component: "Card", props: {...} }, error: null }
      // So result.component is already a GenUIComponentDef: { component: "Card", props: {...} }
      if (component && typeof component === 'object' && 'component' in component) {
        // Check if it's a valid GenUIComponentDef
        const componentName = (component as any).component;
        const componentProps = (component as any).props || {};
        
        if (typeof componentName === 'string') {
          const genUIComponent: GenUIComponentDef = {
            component: componentName,
            props: componentProps,
          };
          // Always update - even if props are incomplete, render what we have
          setParsedComponent(genUIComponent);
        } else if (componentName && typeof componentName === 'object' && 'component' in componentName) {
          // Double nested structure
          const innerComponent = componentName as GenUIComponentDef;
          setParsedComponent(innerComponent);
        }
      }
    }
  }, [content]);

  // If we have a parsed component, render it
  if (parsedComponent) {
    return (
      <div className={styles.streamingContainer}>
        {isStreaming && (
          <div className={styles.streamingIndicator}>
            <span>Building interface...</span>
          </div>
        )}
        <GenUIRenderer component={parsedComponent} onAction={onAction} />
      </div>
    );
  }

  // If streaming but no component yet, show loading state
  if (isStreaming) {
    return (
      <div className={styles.streamingContainer}>
        <div className={styles.skeletonLoader}>
          <div className={styles.skeletonShimmer}></div>
          <span>Generating interface...</span>
        </div>
      </div>
    );
  }

  return null;
};

