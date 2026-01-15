import React from 'react';
import type { ListProps, ActionProps } from '../types';
import { Icon } from './Icon';
import styles from '../GenUI.module.scss';

interface ListRendererProps extends ListProps {
  onAction?: (action: ActionProps) => void;
}

export const List: React.FC<ListRendererProps> = ({ heading, items, onAction }) => {
  return (
    <div className={styles.list}>
      {heading && <h4 className={styles.listHeading}>{heading}</h4>}
      <div className={styles.listItems}>
        {items.map((item, index) => (
          <div key={index} className={styles.listItem}>
            {item.iconName && (
              <div className={styles.listItemIcon}>
                <Icon name={item.iconName} size={18} />
              </div>
            )}
            <div className={styles.listItemContent}>
              <p className={styles.listItemTitle}>{item.title}</p>
              {item.subtitle && (
                <p className={styles.listItemSubtitle}>{item.subtitle}</p>
              )}
            </div>
            {item.itemAction && (
              <div className={styles.listItemAction}>
                <button
                  className={styles.actionButton}
                  onClick={() => onAction?.(item.itemAction!.action)}
                >
                  {item.itemAction.label}
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

