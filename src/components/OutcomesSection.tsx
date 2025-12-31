"use client";

import React from "react";
import styles from "./SectionPlaceholder.module.scss";

export const OutcomesSection: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Outcomes</h1>
        <p className={styles.description}>
          Manage and track your project outcomes here.
        </p>
      </div>
    </div>
  );
};
