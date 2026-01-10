import React from 'react';
import type { ButtonProps, ButtonGroupProps, GenUIComponentDef } from '../types';
import styles from '../GenUI.module.scss';

export const Button: React.FC<ButtonProps> = ({
  children,
  name,
  variant = 'primary',
  disabled = false,
  action,
  onAction,
}) => {
  const handleClick = () => {
    if (action && onAction) {
      onAction(action);
    }
  };

  // Determine button type:
  // - If action.type is 'submit_form', use submit
  // - If name contains submit-related keywords, use submit
  // - If children text suggests submission, use submit
  // - Otherwise use button
  const submitKeywords = ['submit', 'save', 'confirm', 'set', 'create', 'send', 'apply'];
  const nameStr = (name || '').toLowerCase();
  const childrenStr = (typeof children === 'string' ? children : '').toLowerCase();
  
  const isSubmitButton = 
    action?.type === 'submit_form' || 
    submitKeywords.some(keyword => nameStr.includes(keyword)) ||
    submitKeywords.some(keyword => childrenStr.includes(keyword));

  console.log('Button render:', { name, children, isSubmitButton, hasOnAction: !!onAction });

  return (
    <button
      className={`${styles.button} ${styles[variant]}`}
      disabled={disabled}
      onClick={handleClick}
      type={isSubmitButton ? 'submit' : 'button'}
    >
      {children}
    </button>
  );
};

interface ButtonGroupRendererProps extends ButtonGroupProps {
  renderComponent: (def: GenUIComponentDef) => React.ReactNode;
}

export const ButtonGroup: React.FC<ButtonGroupRendererProps> = ({
  variant = 'horizontal',
  children,
  renderComponent,
}) => {
  return (
    <div className={`${styles.buttonGroup} ${styles[variant]}`}>
      {children.map((child, index) => (
        <React.Fragment key={index}>
          {renderComponent(child)}
        </React.Fragment>
      ))}
    </div>
  );
};

