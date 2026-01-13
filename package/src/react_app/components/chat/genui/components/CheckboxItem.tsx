import React, { useState } from 'react';
import type { BaseGenUIProps } from '../types';
import styles from '../GenUI.module.scss';

export interface CheckBoxItemProps extends BaseGenUIProps {
  name?: string;
  value: string;
  label: string;
  checked?: boolean;
  onChange?: (name: string, value: string, checked: boolean) => void;
}

/**
 * CheckBoxItem Component
 * Individual checkbox item that can be used standalone or within a CheckBoxGroup
 */
export const CheckBoxItem: React.FC<CheckBoxItemProps> = ({
  name = 'checkbox',
  value,
  label,
  checked = false,
  onChange,
}) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newChecked = e.target.checked;
    setIsChecked(newChecked);
    if (onChange) {
      onChange(name, value, newChecked);
    }
  };

  return (
    <div className={styles.checkboxWrapper}>
      <input
        type="checkbox"
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

