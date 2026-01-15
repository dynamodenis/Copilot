import React from 'react';
import type { MiniCardProps, MiniCardBlockProps, GenUIComponentDef } from '../types';
import styles from '../GenUI.module.scss';

interface MiniCardRendererProps extends MiniCardProps {
  renderComponent: (def: GenUIComponentDef) => React.ReactNode;
}

export const MiniCard: React.FC<MiniCardRendererProps> = ({
  lhs,
  rhs,
  renderComponent,
}) => {
  return (
    <div className={styles.miniCard}>
      <div className={styles.miniCardLhs}>
        {renderComponent(lhs)}
      </div>
      {rhs && (
        <div className={styles.miniCardRhs}>
          {renderComponent(rhs)}
        </div>
      )}
    </div>
  );
};

interface MiniCardBlockRendererProps extends MiniCardBlockProps {
  renderComponent: (def: GenUIComponentDef) => React.ReactNode;
}

export const MiniCardBlock: React.FC<MiniCardBlockRendererProps> = ({
  children,
  renderComponent,
}) => {
  return (
    <div className={styles.miniCardBlock}>
      {children.map((child, index) => (
        <React.Fragment key={index}>
          {renderComponent(child)}
        </React.Fragment>
      ))}
    </div>
  );
};

