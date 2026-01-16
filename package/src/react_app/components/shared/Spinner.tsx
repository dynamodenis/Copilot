import React from "react";
import styles from "./Spinner.module.scss";

interface SpinnerProps {
  size?: number;
  className?: string;
}

/**
 * Spinner Component
 * 
 * A simple animated spinner with gradient arc effect.
 */
export const Spinner: React.FC<SpinnerProps> = ({ size = 16, className = "" }) => {
  // Generate unique ID for the gradient to avoid conflicts when multiple spinners exist
  const gradientId = React.useId();
  
  return (
    <svg 
      className={`${styles.spinnerSimple} ${className}`} 
      viewBox="0 0 50 50"
      width={size}
      height={size}
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: "#e879f9", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "#e879f9", stopOpacity: 0 }} />
        </linearGradient>
      </defs>
      <circle 
        className={styles.arc} 
        cx="25" 
        cy="25" 
        r="20"
        style={{ stroke: `url(#${gradientId})` }}
      />
      <circle className={styles.dot} cx="25" cy="5" r="2.5" />
    </svg>
  );
};

export default Spinner;

