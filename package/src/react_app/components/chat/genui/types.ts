/**
 * GenUI Type Definitions
 */

export interface ActionProps {
  type: 'continue_conversation' | 'open_url' | 'submit_form';
  props?: Record<string, unknown>;
}

export interface ItemAction {
  action: ActionProps;
  label: string;
  icon?: GenUIComponentDef;
}

export interface GenUIComponentDef {
  component: string;
  props: Record<string, unknown>;
}

// Base props that all GenUI components receive
export interface BaseGenUIProps {
  onAction?: (action: ActionProps, formData?: Record<string, unknown>) => void;
}

// Icon props
export interface IconProps extends BaseGenUIProps {
  name: string;
  category?: string;
  size?: number;
}

// Header props
export interface HeaderProps extends BaseGenUIProps {
  title: string;
  subtitle?: string;
}

// TextContent props
export interface TextContentProps extends BaseGenUIProps {
  textMarkdown: string;
}

// Card props
export interface CardProps extends BaseGenUIProps {
  children: GenUIComponentDef[];
}

// Button props
export interface ButtonProps extends BaseGenUIProps {
  children: string;
  name?: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  disabled?: boolean;
  action?: ActionProps;
}

// ButtonGroup props
export interface ButtonGroupProps extends BaseGenUIProps {
  variant?: 'horizontal' | 'vertical';
  children: GenUIComponentDef[];
}

// Input props
export interface InputProps extends BaseGenUIProps {
  name: string;
  placeholder?: string;
  value?: string;
  type?: 'text' | 'email' | 'password' | 'number';
  rules?: {
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    pattern?: string;
  };
  onChange?: (name: string, value: string) => void;
}

// TextArea props
export interface TextAreaProps extends BaseGenUIProps {
  name: string;
  placeholder?: string;
  value?: string;
  rows?: number;
  rules?: {
    required?: boolean;
    minLength?: number;
    maxLength?: number;
  };
  onChange?: (name: string, value: string) => void;
}

// Select props
export interface SelectProps extends BaseGenUIProps {
  name: string;
  placeholder?: string;
  value?: string;
  options: { value: string; label: string }[];
  rules?: {
    required?: boolean;
  };
  onChange?: (name: string, value: string) => void;
}

// Checkbox props
export interface CheckboxProps extends BaseGenUIProps {
  name: string;
  label: string;
  checked?: boolean;
  onChange?: (name: string, checked: boolean) => void;
}

// RadioGroup props
export interface RadioGroupProps extends BaseGenUIProps {
  name: string;
  options: { value: string; label: string }[];
  value?: string;
  onChange?: (name: string, value: string) => void;
}

// CheckBoxGroup props
export interface CheckBoxGroupProps extends BaseGenUIProps {
  name: string;
  options: { value: string; label: string }[];
  values?: string[];
  onChange?: (name: string, values: string[]) => void;
}

// DatePicker props
export interface DatePickerProps extends BaseGenUIProps {
  name: string;
  placeholder?: string;
  value?: string;
  min?: string;
  max?: string;
  onChange?: (name: string, value: string) => void;
}

// Form field wrapper
export interface FormFieldProps extends BaseGenUIProps {
  label?: string;
  hint?: string;
  children: GenUIComponentDef;
}

// Form props
export interface FormProps extends BaseGenUIProps {
  name: string;
  children: FormFieldProps[];
  buttons?: GenUIComponentDef;
}

// List item
export interface ListItem {
  title: string;
  subtitle?: string;
  iconName?: string;
  iconCategory?: string;
  itemAction?: ItemAction;
}

// List props
export interface ListProps extends BaseGenUIProps {
  heading?: string;
  variant?: 'simple' | 'icon' | 'numbered';
  items: ListItem[];
}

// Stats props
export interface StatsProps extends BaseGenUIProps {
  number: string;
  label: string;
}

// ProfileTile props
export interface ProfileTileProps extends BaseGenUIProps {
  title: string;
  label?: string;
  child?: GenUIComponentDef;
}

// MiniCard props
export interface MiniCardProps extends BaseGenUIProps {
  lhs: GenUIComponentDef;
  rhs?: GenUIComponentDef;
}

// MiniCardBlock props
export interface MiniCardBlockProps extends BaseGenUIProps {
  children: GenUIComponentDef[];
}

// Steps props
export interface StepsItemProps extends BaseGenUIProps {
  title: string;
  details?: GenUIComponentDef;
}

export interface StepsProps extends BaseGenUIProps {
  children: GenUIComponentDef[];
}

// Section props
export interface SectionProps {
  value: string;
  trigger: string;
  content: GenUIComponentDef[];
}

export interface SectionBlockProps extends BaseGenUIProps {
  isFoldable?: boolean;
  sections: SectionProps[];
}

