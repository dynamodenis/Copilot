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

  const { selectedPerson, selectedSuggestionRequest, leverageLoopSummaries, upsertLeverageLoopSummary } = useChatContextStore(
    useShallow((state) => ({
      selectedPerson: state.selectedPerson,
      selectedSuggestionRequest: state.selectedSuggestionRequest,
      leverageLoopSummaries: state.leverageLoopSummaries,
      upsertLeverageLoopSummary: state.upsertLeverageLoopSummary,
    }))
  );

  console.log("leverageLoopSummaries", leverageLoopSummaries);

  const getTitle = () => {
    if (selectedPerson) {
      return `Levergae loop summary for ${selectedPerson.full_name}`;
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
  const handleUpdateSummary = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    console.log("summaryInput", e.target.value);
    setSummaryInput(e.target.value);
    if(selectedPerson) {
      upsertLeverageLoopSummary({ id: selectedPerson.full_name, content: e.target.value, timestamp: new Date() });
    }
    if(selectedSuggestionRequest) {
      upsertLeverageLoopSummary({ id: selectedSuggestionRequest.request_header_title, content: e.target.value, timestamp: new Date() });
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
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleUpdateSummary(e)}
            rows={2}
          />
        </div>
      </div>
    </div>
  );
};

