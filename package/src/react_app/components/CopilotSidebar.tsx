import { useState, useEffect } from "react";
import { useShallow } from "zustand/react/shallow";
import styles from "./CopilotSidebar.module.scss";
import { LeverageLoopContent } from "./shared";

import { useLeverageLoopsStore, type LeverageLoopPerson, type SuggestionRequest } from "@/react_app/store/leverageLoopsStore";
import { useChatContextStore, type ChatMessageType } from "@/react_app/store/chatContextStore";
import { generateId } from "./chat/SectionChat";
import { leverageLoopInitialSectionContentPrompt } from "./ContentPrompts";

import OrbiterLogo from "@/react_app/assets/sidebar/Orbiter logo.svg";
import OutcomesLogo from "@/react_app/assets/sidebar/target-arrow.svg";
import LeverageLoopsLogo from "@/react_app/assets/sidebar/swirl.svg";

export type SidebarSection = "copilot" | "outcomes" | "leverage-loops";

interface CopilotSidebarProps {
  activeSection: SidebarSection;
  onSectionChange: (section: SidebarSection) => void;
}

export const CopilotSidebar: React.FC<CopilotSidebarProps> = ({
  activeSection,
  onSectionChange,
}) => {
  // Leverage loops data store
  const { leverageLoops: _leverageLoops, fetchNetworkPersons, fetchSuggestionRequests, isLoading: _isLoading, error: _error } = useLeverageLoopsStore(
    useShallow((state) => ({
      leverageLoops: state.leverageLoops,
      fetchNetworkPersons: state.fetchNetworkPersons,
      fetchSuggestionRequests: state.fetchSuggestionRequests,
      isLoading: state.isLoading,
      error: state.error,
    }))
  );

  // Chat context store for selections
  const { 
    selectedPerson, 
    selectedSuggestionRequest, 
    setSelectedPerson, 
    setSelectedSuggestionRequest,
    addMessage,
  } = useChatContextStore(
    useShallow((state) => ({
      selectedPerson: state.selectedPerson,
      selectedSuggestionRequest: state.selectedSuggestionRequest,
      setSelectedPerson: state.setSelectedPerson,
      setSelectedSuggestionRequest: state.setSelectedSuggestionRequest,
      addMessage: state.addMessage,
    }))
  );

  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());

  const toggleSection = (sectionId: SidebarSection) => {
    onSectionChange(sectionId);
    setExpandedSections((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(sectionId)) {
        newSet.delete(sectionId);
      } else {
        newSet.add(sectionId);
      }
      return newSet;
    });
  };

  const handleItemSelect = (item: LeverageLoopPerson) => {
    setSelectedPerson(item);
    // Navigate to leverage-loops chat
    onSectionChange("leverage-loops");

    const context = "leverage-loops";
    const responseId = generateId();
  

    // Wrap in thesys content tag
    const content = `<content thesys="true">${JSON.stringify(leverageLoopInitialSectionContentPrompt(item))}</content>`;

    const assistantMessage: ChatMessageType = {
      id: responseId,
      role: "assistant",
      content: content,
      timestamp: new Date(),
      isStreaming: false,
    };

    addMessage(context, assistantMessage);
  };

  const handleSuggestionRequestSelect = (suggestionRequest: SuggestionRequest) => {
    setSelectedSuggestionRequest(suggestionRequest);
    // Navigate to leverage-loops chat
    onSectionChange("leverage-loops");
  };

  useEffect(() => {
    fetchNetworkPersons();
    fetchSuggestionRequests();
  }, []);

  return (
    <div className={styles.sidebar}>
      <nav className={styles.sidebarNav}>
        {/* Copilot Section */}
        <button
          className={`${styles.sidebarItem} ${activeSection === "copilot" ? styles.active : ""}`}
          onClick={() => onSectionChange("copilot")}
          aria-label="Orbiter.io Copilot"
        >
          <span className={styles.sidebarIcon}>
            <img src={OrbiterLogo} alt="Orbiter" width={18} height={18} />
          </span>
          <span className={styles.sidebarLabel}>Orbiter.io Copilot</span>
        </button>

        {/* Outcomes Section */}
        <div className={styles.sectionWrapper}>
          <div className={`${styles.sectionHeader} ${activeSection === "outcomes" ? styles.active : ""}`}>
            <button
              className={styles.sidebarItemInHeader}
              onClick={() => onSectionChange("outcomes")}
              aria-label="Outcomes"
            >
              <span className={styles.sidebarIcon}>
                <img src={OutcomesLogo} alt="Outcomes" width={18} height={18} />
              </span>
              <span className={styles.sidebarLabel}>Outcomes</span>
            </button>
            <button
              className={styles.plusButton}
              onClick={() => toggleSection("outcomes")}
              aria-label="Expand Outcomes"
            >
              <span className={`${styles.plusIcon} ${expandedSections.has("outcomes") ? styles.rotated : ""}`}>
                +
              </span>
            </button>
          </div>
          {/* {expandedSections.has("outcomes") && (
            <ExpandableContent
              contentType="outcomes"
              items={outcomesData}
              selectedItemId={selectedItem}
              onItemSelect={handleItemSelect}
            />
          )} */}
        </div>

        {/* Leverage Loops Section */}
        <div className={styles.sectionWrapper}>
          <div className={`${styles.sectionHeader} ${activeSection === "leverage-loops" ? styles.active : ""}`}>
            <button
              className={styles.sidebarItemInHeader}
              onClick={() => onSectionChange("leverage-loops")}
              aria-label="Leverage Loops"
            >
              <span className={styles.sidebarIcon}>
                <img src={LeverageLoopsLogo} alt="Leverage Loops" width={18} height={18} />
              </span>
              <span className={styles.sidebarLabel}>Leverage Loops</span>
            </button>
            <button
              className={styles.plusButton}
              onClick={() => toggleSection("leverage-loops")}
              aria-label="Expand Leverage Loops"
            >
              <span className={`${styles.plusIcon} ${expandedSections.has("leverage-loops") ? styles.rotated : ""}`}>
                +
              </span>
            </button>
          </div>
          {expandedSections.has("leverage-loops") && (
            <LeverageLoopContent
              contentType="leverage-loops"
              items={_leverageLoops}
              selectedItem={selectedPerson}
              selectedSuggestionRequest={selectedSuggestionRequest}   
              onItemSelect={handleItemSelect}
              onSuggestionRequestSelect={handleSuggestionRequestSelect}
              isLoading={_isLoading}
              error={_error}
            />
          )}
        </div>
      </nav>
    </div>
  );
};
