import React from 'react';
import type { StepsProps, StepsItemProps, GenUIComponentDef } from '../types';
import styles from '../GenUI.module.scss';

interface StepsItemRendererProps extends StepsItemProps {
  renderComponent: (def: GenUIComponentDef) => React.ReactNode;
}

export const StepsItem: React.FC<StepsItemRendererProps> = ({
  title,
  details,
  renderComponent,
}) => {
  return (
    <div className={styles.stepsItem}>
      <h4 className={styles.stepsTitle}>{title}</h4>
      {details && (
        <div className={styles.stepsDetails}>
          {renderComponent(details)}
        </div>
      )}
    </div>
  );
};

interface StepsRendererProps extends StepsProps {
  renderComponent: (def: GenUIComponentDef) => React.ReactNode;
}

export const Steps: React.FC<StepsRendererProps> = ({
  children,
  renderComponent,
}) => {
  return (
    <div className={styles.steps}>
      {children.map((child, index) => (
        <React.Fragment key={index}>
          {renderComponent(child)}
        </React.Fragment>
      ))}
    </div>
  );
};

