/**
 * GenUI Component Configuration
 * 
 * Controls which components are available to the LLM.
 * This helps reduce complexity and improve generation speed.
 */

export interface ComponentConfig {
  // Whether to allow this component
  allowed: boolean;
  // Optional description for system prompts
  description?: string;
}

/**
 * Default component whitelist - simple, commonly used components only
 */
export const DEFAULT_COMPONENT_WHITELIST: Record<string, ComponentConfig> = {
  // Basic Components
  Icon: { allowed: true, description: "Icon component for visual indicators" },
  Header: { allowed: true, description: "Header with title and optional subtitle" },
  TextContent: { allowed: true, description: "Markdown text content" },
  
  // Button Components
  Button: { allowed: true, description: "Interactive button" },
  ButtonGroup: { allowed: true, description: "Group of buttons (horizontal or vertical)" },
  
  // Layout Components
  Card: { allowed: true, description: "Container card for grouping content" },
  List: { allowed: true, description: "List of items with optional icons and actions" },
  
  // Form Components (simplified)
  Form: { allowed: true, description: "Form container for inputs" },
  Input: { allowed: true, description: "Text input field" },
  TextArea: { allowed: true, description: "Multi-line text area" },
  Checkbox: { allowed: true, description: "Single checkbox" },
  
  // Form Components (advanced)
  Select: { allowed: false, description: "Dropdown select (often unnecessary)" },
  RadioGroup: { allowed: false, description: "Radio button group for single selection" },
  RadioItem: { allowed: true, description: "Individual radio button item" },
  CheckBoxGroup: { allowed: false, description: "Checkbox group for multiple selection" },
  CheckBoxItem: { allowed: true, description: "Individual checkbox item" },
  DatePicker: { allowed: true, description: "Date picker input" },
  
  // Advanced Layout Components
  Stats: { allowed: true, description: "Number with label" },
  ProfileTile: { allowed: true, description: "Profile tile with title, label, and icon" },
  MiniCard: { allowed: false, description: "Compact card layout" },
  MiniCardBlock: { allowed: false, description: "Block of mini cards" },
  Steps: { allowed: false, description: "Step-by-step guide" },
  StepsItem: { allowed: false, description: "Individual step item" },
  SectionBlock: { allowed: false, description: "Collapsible section block" },
};

/**
 * Get list of allowed component names
 */
export const getAllowedComponents = (): string[] => {
  return Object.entries(DEFAULT_COMPONENT_WHITELIST)
    .filter(([_, config]) => config.allowed)
    .map(([name]) => name);
};

/**
 * Get system prompt instruction for allowed components
 */
export const getComponentInstruction = (): string => {
  const allowed = getAllowedComponents();
  return `You can use these GenUI components: ${allowed.join(", ")}. Do not use any other components. Keep the interface simple and avoid unnecessary complexity.`;
};

