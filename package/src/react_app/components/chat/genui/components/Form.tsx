import React, { useState, useCallback } from 'react';
import type { 
  FormProps, 
  FormFieldProps, 
  InputProps, 
  TextAreaProps, 
  SelectProps,
  CheckboxProps,
  RadioGroupProps,
  CheckBoxGroupProps,
  DatePickerProps,
  GenUIComponentDef,
  ActionProps,
} from '../types';
import styles from '../GenUI.module.scss';

// Input Component
export const Input: React.FC<InputProps> = ({
  name,
  placeholder,
  value = '',
  type = 'text',
  rules,
  onChange,
}) => {
  const [localValue, setLocalValue] = useState(value);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setLocalValue(newValue);
    
    // Validate
    if (rules?.required && !newValue) {
      setError('This field is required');
    } else if (rules?.minLength && newValue.length < rules.minLength) {
      setError(`Minimum ${rules.minLength} characters required`);
    } else {
      setError(null);
    }
    
    onChange?.(name, newValue);
  };

  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={localValue}
      onChange={handleChange}
      className={`${styles.input} ${error ? styles.error : ''}`}
    />
  );
};

// TextArea Component
export const TextArea: React.FC<TextAreaProps> = ({
  name,
  placeholder,
  value = '',
  rows = 3,
  rules,
  onChange,
}) => {
  const [localValue, setLocalValue] = useState(value);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    setLocalValue(newValue);
    
    if (rules?.required && !newValue) {
      setError('This field is required');
    } else if (rules?.minLength && newValue.length < rules.minLength) {
      setError(`Minimum ${rules.minLength} characters required`);
    } else {
      setError(null);
    }
    
    onChange?.(name, newValue);
  };

  return (
    <textarea
      name={name}
      placeholder={placeholder}
      value={localValue}
      rows={rows}
      onChange={handleChange}
      className={`${styles.textarea} ${error ? styles.error : ''}`}
    />
  );
};

// Select Component
export const Select: React.FC<SelectProps> = ({
  name,
  placeholder,
  value = '',
  options = [],
  onChange,
}) => {
  const [localValue, setLocalValue] = useState(value);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = e.target.value;
    setLocalValue(newValue);
    onChange?.(name, newValue);
  };

  // Guard against undefined/null options
  const safeOptions = options && Array.isArray(options) ? options : [];

  return (
    <select
      name={name}
      value={localValue}
      onChange={handleChange}
      className={styles.select}
    >
      {placeholder && <option value="">{placeholder}</option>}
      {safeOptions.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

// Checkbox Component
export const Checkbox: React.FC<CheckboxProps> = ({
  name,
  label,
  checked = false,
  onChange,
}) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newChecked = e.target.checked;
    setIsChecked(newChecked);
    onChange?.(name, newChecked);
  };

  return (
    <div className={styles.checkboxWrapper}>
      <input
        type="checkbox"
        id={name}
        name={name}
        checked={isChecked}
        onChange={handleChange}
      />
      <label htmlFor={name}>{label}</label>
    </div>
  );
};

// RadioGroup Component
export const RadioGroup: React.FC<RadioGroupProps> = ({
  name,
  options = [],
  children,
  value = '',
  onChange,
}) => {
  const [selectedValue, setSelectedValue] = useState(value);

  const handleChange = (newValue: string) => {
    setSelectedValue(newValue);
    onChange?.(name, newValue);
  };

  // If children are provided (LLM format with RadioItem components), render them
  if (children && Array.isArray(children) && children.length > 0) {
    return (
      <div className={styles.radioGroup}>
        {children.map((child, index) => {
          const childObj = child as { component?: string; props?: { value?: string; label?: string } };
          if (childObj.component === 'RadioItem' && childObj.props) {
            const { value: itemValue, label } = childObj.props;
            const radioValue = itemValue || `item-${index}`;
            return (
              <div key={radioValue} className={styles.radioWrapper}>
                <input
                  type="radio"
                  id={`${name}-${radioValue}`}
                  name={name}
                  value={radioValue}
                  checked={selectedValue === radioValue}
                  onChange={() => handleChange(radioValue)}
                />
                <label htmlFor={`${name}-${radioValue}`}>{label || radioValue}</label>
              </div>
            );
          }
          return null;
        })}
      </div>
    );
  }

  // Fallback to options format
  if (!options || !Array.isArray(options) || options.length === 0) {
    return <div className={styles.radioGroup}>No options available</div>;
  }

  return (
    <div className={styles.radioGroup}>
      {options.map((option) => (
        <div key={option.value} className={styles.radioWrapper}>
          <input
            type="radio"
            id={`${name}-${option.value}`}
            name={name}
            value={option.value}
            checked={selectedValue === option.value}
            onChange={() => handleChange(option.value)}
          />
          <label htmlFor={`${name}-${option.value}`}>{option.label}</label>
        </div>
      ))}
    </div>
  );
};

// CheckBoxGroup Component
export const CheckBoxGroup: React.FC<CheckBoxGroupProps> = ({
  name,
  options = [],
  children,
  values = [],
  onChange,
}) => {
  const [selectedValues, setSelectedValues] = useState<string[]>(values);

  const handleChange = (optionValue: string, checked: boolean) => {
    const newValues = checked
      ? [...selectedValues, optionValue]
      : selectedValues.filter(v => v !== optionValue);
    setSelectedValues(newValues);
    onChange?.(name, newValues);
  };

  // If children are provided (LLM format with CheckBoxItem components), render them
  if (children && Array.isArray(children) && children.length > 0) {
    return (
      <div className={styles.checkboxGroup}>
        {children.map((child, index) => {
          // Handle CheckBoxItem component format from LLM
          const childObj = child as { component?: string; props?: { name?: string; label?: string } };
          if (childObj.component === 'CheckBoxItem' && childObj.props) {
            const { name: itemName, label } = childObj.props;
            const itemValue = itemName || `item-${index}`;
            return (
              <div key={itemValue} className={styles.checkboxWrapper}>
                <input
                  type="checkbox"
                  id={`${name}-${itemValue}`}
                  name={name}
                  value={itemValue}
                  checked={selectedValues.includes(itemValue)}
                  onChange={(e) => handleChange(itemValue, e.target.checked)}
                />
                <label htmlFor={`${name}-${itemValue}`}>{label || itemValue}</label>
              </div>
            );
          }
          return null;
        })}
      </div>
    );
  }

  // Fallback to options format
  if (!options || !Array.isArray(options) || options.length === 0) {
    return <div className={styles.checkboxGroup}>No options available</div>;
  }

  return (
    <div className={styles.checkboxGroup}>
      {options.map((option) => (
        <div key={option.value} className={styles.checkboxWrapper}>
          <input
            type="checkbox"
            id={`${name}-${option.value}`}
            name={name}
            value={option.value}
            checked={selectedValues.includes(option.value)}
            onChange={(e) => handleChange(option.value, e.target.checked)}
          />
          <label htmlFor={`${name}-${option.value}`}>{option.label}</label>
        </div>
      ))}
    </div>
  );
};

// DatePicker Component
export const DatePicker: React.FC<DatePickerProps> = ({
  name,
  placeholder,
  value = '',
  min,
  max,
  onChange,
}) => {
  const [localValue, setLocalValue] = useState(value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setLocalValue(newValue);
    onChange?.(name, newValue);
  };

  return (
    <input
      type="date"
      name={name}
      placeholder={placeholder}
      value={localValue}
      min={min}
      max={max}
      onChange={handleChange}
      className={styles.input}
    />
  );
};

// FormField Wrapper
interface FormFieldRendererProps extends FormFieldProps {
  renderComponent: (def: GenUIComponentDef) => React.ReactNode;
}

export const FormField: React.FC<FormFieldRendererProps> = ({
  label,
  hint,
  children,
  renderComponent,
}) => {
  return (
    <div className={styles.formField}>
      {label && <label className={styles.fieldLabel}>{label}</label>}
      {renderComponent(children)}
      {hint && <span className={styles.fieldHint}>{hint}</span>}
    </div>
  );
};

// Form Component
interface FormRendererProps extends FormProps {
  renderComponent: (def: GenUIComponentDef) => React.ReactNode;
}

export const Form: React.FC<FormRendererProps> = ({
  name,
  children,
  buttons,
  onAction,
  renderComponent,
}) => {
  const [formData, setFormData] = useState<Record<string, unknown>>({});

  const handleFieldChange = useCallback((fieldName: string, value: unknown) => {
    setFormData(prev => ({ ...prev, [fieldName]: value }));
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onAction) {
      const action: ActionProps = { type: 'submit_form', props: { formName: name, formData } };
      onAction(action, formData);
    } else {
      console.warn('Form onAction is not defined');
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} name={name}>
      {children.map((field, index) => (
        <FormField
          key={index}
          label={field.label}
          hint={field.hint}
          children={{
            ...field.children,
            props: {
              ...field.children.props,
              onChange: handleFieldChange,
            },
          }}
          renderComponent={renderComponent}
        />
      ))}
      {buttons && renderComponent(buttons)}
    </form>
  );
};

