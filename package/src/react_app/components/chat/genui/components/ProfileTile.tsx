import React from 'react';
import type { ProfileTileProps, GenUIComponentDef } from '../types';
import styles from '../GenUI.module.scss';

interface ProfileTileRendererProps extends ProfileTileProps {
  renderComponent: (def: GenUIComponentDef) => React.ReactNode;
}

export const ProfileTile: React.FC<ProfileTileRendererProps> = ({
  title,
  label,
  child,
  renderComponent,
}) => {
  return (
    <div className={styles.profileTile}>
      {child && (
        <div className={styles.profileIcon}>
          {renderComponent(child)}
        </div>
      )}
      <div className={styles.profileContent}>
        <p className={styles.profileTitle}>{title}</p>
        {label && <p className={styles.profileLabel}>{label}</p>}
      </div>
    </div>
  );
};

