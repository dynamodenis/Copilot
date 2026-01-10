import React from 'react';
import type { CardProps, GenUIComponentDef } from '../types';
import styles from '../GenUI.module.scss';

interface CardRendererProps extends CardProps {
  renderComponent: (def: GenUIComponentDef) => React.ReactNode;
}

export const Card: React.FC<CardRendererProps> = ({ children, renderComponent }) => {
  return (
    <div className={styles.card}>
      {children.map((child, index) => (
        <React.Fragment key={index}>
          {renderComponent(child)}
        </React.Fragment>
      ))}
    </div>
  );
};

