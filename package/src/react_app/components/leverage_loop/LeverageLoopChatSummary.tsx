import React, { useState, useEffect } from "react";
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

  const { selectedPerson, selectedSuggestionRequest, leverageLoopSummaries, upsertLeverageLoopSummary, currentLeverageLoopChat } = useChatContextStore(
    useShallow((state) => ({
      selectedPerson: state.selectedPerson,
      selectedSuggestionRequest: state.selectedSuggestionRequest,
      leverageLoopSummaries: state.leverageLoopSummaries,
      upsertLeverageLoopSummary: state.upsertLeverageLoopSummary,
      currentLeverageLoopChat: state.getCurrentLeverageLoopChat(),
    }))
  );

  // Load existing summary when person or suggestion request changes, and concatenate user messages
  useEffect(() => {
    let summaryId: string | null = null;
    
    if (selectedPerson) {
      summaryId = selectedPerson.full_name;
    } else if (selectedSuggestionRequest) {
      summaryId = selectedSuggestionRequest.request_header_title;
    }
    
    if (summaryId) {
      const existingSummary = leverageLoopSummaries.find((s) => s.id === summaryId);
      const savedSummaryContent = existingSummary?.content || "";
      
      // Get user messages from current leverage-loop chat (specific to this person/suggestion request)
      const userMessages = currentLeverageLoopChat.messages
        .filter((msg) => msg.role === "user")
        .map((msg) => msg.content.trim())
        .filter((content) => content.length > 0);
      
      // Concatenate saved summary with user messages, separated by commas
      const contentParts: string[] = [];
      if (savedSummaryContent.trim()) {
        contentParts.push(savedSummaryContent.trim());
      }
      contentParts.push(...userMessages);
      
      const combinedContent = contentParts.join(", ");
      
      setSummaryInput(combinedContent);
    } else {
      setSummaryInput("");
    }
  }, [selectedPerson, selectedSuggestionRequest, leverageLoopSummaries, currentLeverageLoopChat.messages]);

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

