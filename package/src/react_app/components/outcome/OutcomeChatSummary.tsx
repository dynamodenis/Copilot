import React, { useState, useEffect } from "react";
import { useShallow } from "zustand/react/shallow";
import { useChatContextStore } from "@/react_app/store/chatContextStore";
import styles from "../CopilotChat.module.scss";

interface OutcomeChatSummaryProps {
  onSendMessage: (message: string) => void;
  isLoading: boolean;
}

export const OutcomeChatSummary: React.FC<OutcomeChatSummaryProps> = ({
  onSendMessage,
  isLoading,
}) => {
  const [summaryInput, setSummaryInput] = useState("");

  const { selectedSuggestionRequest, outcomesSummaries, upsertOutcomesSummary } = useChatContextStore(
    useShallow((state) => ({
      selectedSuggestionRequest: state.selectedSuggestionRequest,
      outcomesSummaries: state.outcomesSummaries,
      upsertOutcomesSummary: state.upsertOutcomesSummary,
    }))
  );

  // Load existing summary when outcome changes
  useEffect(() => {
    let summaryId: string = "outcomes-summary";
    
    if (selectedSuggestionRequest) {
      summaryId = selectedSuggestionRequest.request_panel_title || selectedSuggestionRequest.request_header_title;
    }
    
    if (summaryId) {
      const existingSummary = outcomesSummaries.find((s) => s.id === summaryId);
      // Use the AI-generated summary from the store
      setSummaryInput(existingSummary?.content || "");
    } else {
      setSummaryInput("");
    }
  }, [selectedSuggestionRequest, outcomesSummaries]);

  const getTitle = () => {
    if (selectedSuggestionRequest) {
      return selectedSuggestionRequest.request_panel_title || selectedSuggestionRequest.request_header_title || "Outcome Summary";
    }
    return "Create an Outcome:";
  };

  const handleSubmit = () => {
    if (summaryInput.trim()) {
      onSendMessage(summaryInput.trim());
      setSummaryInput("");
    }
  };

  const handleUpdateSummary = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSummaryInput(e.target.value);
    if (selectedSuggestionRequest) {
      const summaryId = selectedSuggestionRequest.request_panel_title || selectedSuggestionRequest.request_header_title;
      if (summaryId) {
        upsertOutcomesSummary({ id: summaryId, content: e.target.value, timestamp: new Date() });
      }
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
            // placeholder="Summary of what you want to achieve..."
            value={summaryInput}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleUpdateSummary(e)}
            rows={2}
          />
        </div>
      </div>
    </div>
  );
};

