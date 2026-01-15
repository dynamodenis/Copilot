import React from 'react';
import type { HeaderProps } from '../types';
import styles from '../GenUI.module.scss';

export const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
  return (
    <div className={styles.header}>
      <h3 className={styles.headerTitle}>{title}</h3>
      {subtitle && <p className={styles.headerSubtitle}>{subtitle}</p>}
    </div>
  );
};

