import React from 'react';
import type { CardProps, GenUIComponentDef } from '../types';
import styles from '../GenUI.module.scss';

interface CardRendererProps extends CardProps {
  renderComponent: (def: GenUIComponentDef) => React.ReactNode;
}

export const Card: React.FC<CardRendererProps> = ({ children, sources, renderComponent }) => {
  // Handle missing or undefined children gracefully (during streaming, children may not be available yet)
  if (!children || !Array.isArray(children)) {
    return <div className={styles.card}></div>;
  }

  return (
    <div className={styles.card}>
      {children.map((child, index) => (
        <React.Fragment key={index}>
          {renderComponent(child)}
        </React.Fragment>
      ))}
      
      {/* Render sources if available */}
      {sources && sources.length > 0 && (
        <div className={styles.sources}>
          <div className={styles.sourcesHeader}>Sources</div>
          <div className={styles.sourcesList}>
            {sources.map((source, index) => (
              <a
                key={index}
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.sourceItem}
              >
                <span className={styles.sourceIndex}>[{index + 1}]</span>
                <span className={styles.sourceTitle}>{source.title}</span>
                {source.sourceName && (
                  <span className={styles.sourceName}> - {source.sourceName}</span>
                )}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

