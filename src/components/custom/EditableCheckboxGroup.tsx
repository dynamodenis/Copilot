import { useOnAction, useC1State } from "@thesysai/genui-sdk";
import styles from "./EditableCheckboxGroup.module.scss";

interface Option {
  label: string;
  value: string;
  description?: string;
}

interface EditableCheckboxGroupProps {
  options: Option[];
  question: string;
  name?: string;
}

/**
 * Custom CheckboxGroup component for Thesys C1
 * 
 * When a user changes selections, it triggers an action that can be intercepted
 * to populate the chat input for editing before submission.
 */
export const EditableCheckboxGroup = ({
  options,
  question,
  name = "checkbox-group",
}: EditableCheckboxGroupProps) => {
  const onAction = useOnAction();
  const { getValue, setValue } = useC1State("EditableCheckboxGroup");

  // Initialize with empty array if no value
  const selectedValues: string[] = getValue() || [];

  const handleToggle = (option: Option) => {
    const newSelectedValues = selectedValues.includes(option.value)
      ? selectedValues.filter((v) => v !== option.value)
      : [...selectedValues, option.value];

    setValue(newSelectedValues);

    // Get labels of all selected options for the message
    const selectedLabels = options
      .filter((opt) => newSelectedValues.includes(opt.value))
      .map((opt) => opt.label);

    const humanMessage =
      selectedLabels.length > 0
        ? `Selected: ${selectedLabels.join(", ")}`
        : "No options selected";

    const llmMessage =
      selectedLabels.length > 0
        ? `User selected the following options for question "${question}": ${selectedLabels.join(", ")}. Values: ${newSelectedValues.join(", ")}`
        : `User deselected all options for question: "${question}"`;

    // Trigger action with both human-friendly and LLM-friendly messages
    onAction(humanMessage, llmMessage);
  };

  return (
    <div className={styles.checkboxGroup}>
      {question && <p className={styles.question}>{question}</p>}
      <div className={styles.optionsContainer}>
        {options.map((option) => {
          const isChecked = selectedValues.includes(option.value);
          return (
            <label
              key={option.value}
              className={`${styles.checkboxOption} ${
                isChecked ? styles.selected : ""
              }`}
            >
              <input
                type="checkbox"
                name={name}
                value={option.value}
                checked={isChecked}
                onChange={() => handleToggle(option)}
                className={styles.checkboxInput}
              />
              <span className={styles.checkboxCustom}>
                {isChecked && (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
              </span>
              <div className={styles.labelContent}>
                <span className={styles.label}>{option.label}</span>
                {option.description && (
                  <small className={styles.description}>
                    {option.description}
                  </small>
                )}
              </div>
            </label>
          );
        })}
      </div>
    </div>
  );
};

