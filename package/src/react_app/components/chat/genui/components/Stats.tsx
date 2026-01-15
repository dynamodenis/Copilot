import React from 'react';
import type { StatsProps } from '../types';
import styles from '../GenUI.module.scss';

export const Stats: React.FC<StatsProps> = ({ number, label }) => {
  return (
    <div className={styles.stats}>
      <p className={styles.statsNumber}>{number}</p>
      <p className={styles.statsLabel}>{label}</p>
    </div>
  );
};

