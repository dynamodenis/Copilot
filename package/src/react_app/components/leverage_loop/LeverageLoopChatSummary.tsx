import React, { useState } from "react";
import { useShallow } from "zustand/react/shallow";
import { useChatContextStore } from "@/react_app/store/chatContextStore";
import styles from "../CopilotChat.module.scss";

interface LeverageLoopSummaryProps {
  onSendMessage: (message: string) => void;
  isLoading: boolean;
}

export const LeverageLoopSummary: React.FC<LeverageLoopSummaryProps> = ({
  onSendMessage,
  isLoading,
}) => {
  const [summaryInput, setSummaryInput] = useState("");

  const { selectedPerson, selectedSuggestionRequest } = useChatContextStore(
    useShallow((state) => ({
      selectedPerson: state.selectedPerson,
      selectedSuggestionRequest: state.selectedSuggestionRequest,
    }))
  );

  const getTitle = () => {
    if (selectedPerson) {
      return `Levergae loop summary for${selectedPerson.full_name}`;
    }
    if (selectedSuggestionRequest) {
      return selectedSuggestionRequest.request_header_title;
    }
    return "Leverage Loops";
  };

  const handleSubmit = () => {
    if (summaryInput.trim()) {
      onSendMessage(summaryInput.trim());
      setSummaryInput("");
    }
  };

  return (
    <div className={styles.leverageLoopSummary}>
      <div className={styles.summaryCard}>
        <div className={styles.summaryCardHeader}>
          <p className={styles.summaryCardTitle}>{getTitle()}</p>
          <button
            className={styles.summaryCardButton}
            onClick={handleSubmit}
            disabled={!summaryInput.trim() || isLoading}
          >
            <span className={styles.playIcon}>▶</span>
          </button>
        </div>
        <div className={styles.summaryCardInput}>
          <textarea
            className={styles.summaryTextarea}
            placeholder="Summary of what I can help you with..."
            value={summaryInput}
            onChange={(e) => setSummaryInput(e.target.value)}
            rows={2}
          />
        </div>
      </div>
    </div>
  );
};

