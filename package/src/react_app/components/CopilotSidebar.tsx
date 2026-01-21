import { useState, useEffect } from "react";
import { useShallow } from "zustand/react/shallow";
import styles from "./CopilotSidebar.module.scss";

import { useLeverageLoopsStore, type LeverageLoopPerson, type SuggestionRequest } from "@/react_app/store/leverageLoopsStore";
import { useChatContextStore, type ChatMessageType } from "@/react_app/store/chatContextStore";
import { useVariablesStore } from "@/react_app/store/variablesStore";
import { generateId } from "./chat/SectionChat";
import { leverageLoopInitialSectionContentPrompt, suggestionRequestInitialSectionContentPrompt } from "./leverage_loop/LeverageLoopChatContent";
import { LeverageLoopSidebarContent } from "./leverage_loop/LeverageLoopSidebarContent";
import { OutcomesSidebarContent } from "./outcome/OutcomesSidebarContent";

import OrbiterLogo from "@/react_app/assets/sidebar/Orbiter logo.svg";
import OutcomesLogo from "@/react_app/assets/sidebar/target-arrow.svg";
import LeverageLoopsLogo from "@/react_app/assets/sidebar/swirl.svg";

export type SidebarSection = "copilot" | "outcomes" | "leverage-loops";

interface CopilotSidebarProps {
  activeSection: SidebarSection;
  onSectionChange: (section: SidebarSection) => void;
  onSectionChangeConfiguration: (section: SidebarSection) => void;
}

export const CopilotSidebar: React.FC<CopilotSidebarProps> = ({
  activeSection,
  onSectionChange,
  onSectionChangeConfiguration,
}) => {
  // Leverage loops data store
  const { fetchNetworkPersons, fetchSuggestionRequests, fetchOutcomesSuggestionRequests } = useLeverageLoopsStore(
    useShallow((state) => ({
      fetchNetworkPersons: state.fetchNetworkPersons,
      fetchSuggestionRequests: state.fetchSuggestionRequests,
      fetchOutcomesSuggestionRequests: state.fetchOutcomesSuggestionRequests,
    }))
  );

  // Chat context store for selections
  const {
    selectedPerson,
    selectedSuggestionRequest,
    setSelectedPerson,
    setSelectedSuggestionRequest,
    addMessage,
    leverageLoopChats,
    outcomesChats
  } = useChatContextStore(
    useShallow((state) => ({
      selectedPerson: state.selectedPerson,
      selectedSuggestionRequest: state.selectedSuggestionRequest,
      setSelectedPerson: state.setSelectedPerson,
      setSelectedSuggestionRequest: state.setSelectedSuggestionRequest,
      addMessage: state.addMessage,
      leverageLoopChats: state.leverageLoopChats,
      outcomesChats: state.outcomesChats,
    }))
  );

  // Watch for variables in the store to ensure they're available before making API calls
  const { token, baseUrl } = useVariablesStore(
    useShallow((state) => ({
      token: state.token,
      baseUrl: state.baseUrl,
    }))
  );

  // Track which sidebar content sections are expanded
  const [expandedSections, setExpandedSections] = useState<Set<SidebarSection>>(new Set());

  const toggleSectionExpanded = (sectionId: SidebarSection) => {
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

  // Handle person selection for leverage loops
  const handlePersonSelect = (item: LeverageLoopPerson) => {
    setSelectedPerson(item);
    onSectionChange("leverage-loops");

    const chatKey = item.full_name;
    const existingChat = leverageLoopChats[chatKey];
    const hasInitialMessage = existingChat?.messages?.[0]?.role === "assistant";

    if (!hasInitialMessage) {
      const context = "leverage-loops";
      
      const initialAssistantMessage: ChatMessageType = {
        id: generateId(),
        role: "assistant",
        content: "Select a person from your contacts to assist with your network.",
        timestamp: new Date(),
        isStreaming: false,
      };
      addMessage(context, initialAssistantMessage, chatKey);

      const userMessage: ChatMessageType = {
        id: generateId(),
        role: "user",
        content: `${item.full_name} \n ${item.master_person?.current_title} at ${item.master_person?.master_company?.company_name}`,
        timestamp: new Date(),
        isStreaming: false,
      };
      addMessage(context, userMessage, chatKey);

      const responseId = generateId();
      const content = `<content thesys="true">${JSON.stringify(leverageLoopInitialSectionContentPrompt(item))}</content>`;

      const assistantMessage: ChatMessageType = {
        id: responseId,
        role: "assistant",
        content: content,
        timestamp: new Date(),
        isStreaming: false,
      };

      addMessage(context, assistantMessage, chatKey);
    }
  };

  // Handle suggestion request selection for leverage loops
  const handleLeverageLoopSuggestionRequestSelect = (suggestionRequest: SuggestionRequest) => {
    setSelectedSuggestionRequest(suggestionRequest);
    onSectionChange("leverage-loops");

    const chatKey = suggestionRequest.request_panel_title;
    const existingChat = leverageLoopChats[chatKey];
    const hasInitialMessage = existingChat?.messages?.[0]?.role === "assistant";

    if (!hasInitialMessage) {
      const context = "leverage-loops";
      const responseId = generateId();

      const content = `<content thesys="true">${JSON.stringify(suggestionRequestInitialSectionContentPrompt(suggestionRequest))}</content>`;

      const assistantMessage: ChatMessageType = {
        id: responseId,
        role: "assistant",
        content: content,
        timestamp: new Date(),
        isStreaming: false,
      };

      addMessage(context, assistantMessage, chatKey);
    }
  };

  // Handle suggestion request selection for outcomes
  const handleOutcomesSuggestionRequestSelect = (suggestionRequest: SuggestionRequest) => {
    setSelectedSuggestionRequest(suggestionRequest);
    onSectionChange("outcomes");

    const chatKey = suggestionRequest.request_panel_title;
    const existingChat = outcomesChats[chatKey];
    const hasInitialMessage = existingChat?.messages?.[0]?.role === "assistant";

    if (!hasInitialMessage) {
      const context = "outcomes";
      const responseId = generateId();

      const content = `<content thesys="true">${JSON.stringify(suggestionRequestInitialSectionContentPrompt(suggestionRequest))}</content>`;

      const assistantMessage: ChatMessageType = {
        id: responseId,
        role: "assistant",
        content: content,
        timestamp: new Date(),
        isStreaming: false,
      };

      addMessage(context, assistantMessage, chatKey);
    }
  };

  // Only fetch data when variables are available in the store
  useEffect(() => {
    if (token && baseUrl) {
      fetchNetworkPersons();
      fetchSuggestionRequests();
      fetchOutcomesSuggestionRequests();
    }
  }, [token, baseUrl, fetchNetworkPersons, fetchSuggestionRequests, fetchOutcomesSuggestionRequests]);

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
              onClick={() => onSectionChangeConfiguration("outcomes")}
              aria-label="Outcomes"
            >
              <span className={styles.sidebarIcon}>
                <img src={OutcomesLogo} alt="Outcomes" width={18} height={18} />
              </span>
              <span className={styles.sidebarLabel}>Outcomes</span>
            </button>
            <button
              className={styles.plusButton}
              onClick={() => toggleSectionExpanded("outcomes")}
              aria-label="Expand Outcomes"
            >
              <span className={`${styles.plusIcon} ${expandedSections.has("outcomes") ? styles.rotated : ""}`}>
                +
              </span>
            </button>
          </div>
        </div>

        {/* Leverage Loops Section */}
        <div className={styles.sectionWrapper}>
          <div className={`${styles.sectionHeader} ${activeSection === "leverage-loops" ? styles.active : ""}`}>
            <button
              className={styles.sidebarItemInHeader}
              onClick={() => onSectionChangeConfiguration("leverage-loops")}
              aria-label="Leverage Loops"
            >
              <span className={styles.sidebarIcon}>
                <img src={LeverageLoopsLogo} alt="Leverage Loops" width={18} height={18} />
              </span>
              <span className={styles.sidebarLabel}>Leverage Loops</span>
            </button>
            <button
              className={styles.plusButton}
              onClick={() => toggleSectionExpanded("leverage-loops")}
              aria-label="Expand Leverage Loops"
            >
              <span className={`${styles.plusIcon} ${expandedSections.has("leverage-loops") ? styles.rotated : ""}`}>
                +
              </span>
            </button>
          </div>
        </div>

        <div>
          {expandedSections.has("leverage-loops") && (
            <LeverageLoopSidebarContent
              selectedPerson={selectedPerson}
              selectedSuggestionRequest={selectedSuggestionRequest}
              onPersonSelect={handlePersonSelect}
              onSuggestionRequestSelect={handleLeverageLoopSuggestionRequestSelect}
            />
          )}
          {expandedSections.has("outcomes") && (
            <OutcomesSidebarContent
              selectedSuggestionRequest={selectedSuggestionRequest}
              onSuggestionRequestSelect={handleOutcomesSuggestionRequestSelect}
            />
          )}
        </div>

      </nav>
    </div>
  );
};
