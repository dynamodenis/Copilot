import { useOnAction, useC1State } from "@thesysai/genui-sdk";
import styles from "./EditableRadioGroup.module.scss";

interface Option {
  label: string;
  value: string;
  description?: string;
}

interface EditableRadioGroupProps {
  options: Option[];
  question: string;
  name?: string;
}

/**
 * Custom RadioGroup component for Thesys C1
 * 
 * When a user selects an option, it triggers an action that can be intercepted
 * to populate the chat input for editing before submission.
 */
export const EditableRadioGroup = ({
  options,
  question,
  name = "radio-group",
}: EditableRadioGroupProps) => {
  const onAction = useOnAction();
  const { getValue, setValue } = useC1State("EditableRadioGroup");

  const handleSelect = (option: Option) => {
    setValue(option.value);

    // Trigger action with both human-friendly and LLM-friendly messages
    onAction(
      option.label, // Human-friendly message (shown to user)
      `User selected: "${option.label}" for question: "${question}". Value: ${option.value}` // LLM-friendly message
    );
  };

  const selectedValue = getValue();

  return (
    <div className={styles.radioGroup}>
      {question && <p className={styles.question}>{question}</p>}
      <div className={styles.optionsContainer}>
        {options.map((option) => (
          <label
            key={option.value}
            className={`${styles.radioOption} ${
              selectedValue === option.value ? styles.selected : ""
            }`}
          >
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={selectedValue === option.value}
              onChange={() => handleSelect(option)}
              className={styles.radioInput}
            />
            <span className={styles.radioCustom} />
            <div className={styles.labelContent}>
              <span className={styles.label}>{option.label}</span>
              {option.description && (
                <small className={styles.description}>{option.description}</small>
              )}
            </div>
          </label>
        ))}
      </div>
    </div>
  );
};

