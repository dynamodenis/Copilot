import React, { useState } from 'react';
import type { BaseGenUIProps } from '../types';
import styles from '../GenUI.module.scss';

export interface RadioItemProps extends BaseGenUIProps {
  name?: string;
  value: string;
  label: string;
  checked?: boolean;
  onChange?: (name: string, value: string) => void;
}

/**
 * RadioItem Component
 * Individual radio button item that can be used standalone or within a RadioGroup
 */
export const RadioItem: React.FC<RadioItemProps> = ({
  name = 'radio',
  value,
  label,
  checked = false,
  onChange,
}) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newChecked = e.target.checked;
    setIsChecked(newChecked);
    if (newChecked && onChange) {
      onChange(name, value);
    }
  };

  return (
    <div className={styles.radioWrapper}>
      <input
        type="radio"
        id={`${name}-${value}`}
        name={name}
        value={value}
        checked={isChecked}
        onChange={handleChange}
      />
      <label htmlFor={`${name}-${value}`}>{label}</label>
    </div>
  );
};

