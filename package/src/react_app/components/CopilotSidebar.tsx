import { useState, useEffect } from "react";
import { useShallow } from "zustand/react/shallow";
import styles from "./CopilotSidebar.module.scss";
import { LeverageLoopContent } from "./shared";

import { useLeverageLoopsStore, type LeverageLoopPerson, type SuggestionRequest } from "@/react_app/store/leverageLoopsStore";

import OrbiterLogo from "@/react_app/assets/sidebar/Orbiter logo.svg";
import OutcomesLogo from "@/react_app/assets/sidebar/target-arrow.svg";
import LeverageLoopsLogo from "@/react_app/assets/sidebar/swirl.svg";

export type SidebarSection = "copilot" | "outcomes" | "leverage-loops";

interface CopilotSidebarProps {
  activeSection: SidebarSection;
  onSectionChange: (section: SidebarSection) => void;
}

// Sample data for Outcomes section
// TODO: Replace with actual data fetching
// const outcomesData: SuggestionItem[] = [
//   { id: "1", label: "Brand Identity Design", status: "completed" },
//   {
//     id: "2",
//     label: "Identify Launch Partners",
//     status: "in-progress",
//     children: [
//       { id: "2a", label: "Map Your Partnership Categories", status: "completed" },
//       { id: "2b", label: "Research & Score Potential Partners", status: "in-progress" },
//       { id: "2c", label: "Build Your Partnership Value Prop", status: "pending" },
//       { id: "2d", label: "Identify Key Stakeholders", status: "pending" },
//       { id: "2e", label: "Create Outreach Sequence", status: "pending" },
//       { id: "2f", label: "Secure Agreements", status: "pending" },
//     ],
//   },
//   { id: "3", label: "Onboard Operator Pilots", status: "pending" },
//   { id: "4", label: "1st Paying Enterprise Pilot", status: "pending" },
//   { id: "5", label: "Close $30M+ Seed Round", status: "pending" },
//   { id: "6", label: "Press Pickup", status: "pending" },
//   { id: "7", label: "Archived", status: "archived" },
// ];


export const CopilotSidebar: React.FC<CopilotSidebarProps> = ({
  activeSection,
  onSectionChange,
}) => {
  const { leverageLoops: _leverageLoops, suggestionRequests: _suggestionRequests, fetchNetworkPersons,fetchSuggestionRequests, isLoading: _isLoading, error: _error } = useLeverageLoopsStore(
    useShallow((state) => ({
      leverageLoops: state.leverageLoops,
      suggestionRequests: state.suggestionRequests,
      fetchNetworkPersons: state.fetchNetworkPersons,
      fetchSuggestionRequests: state.fetchSuggestionRequests,
      isLoading: state.isLoading,
      error: state.error,
    }))
  );
  // TODO: Use these values when implementing the UI
  void _leverageLoops; void _isLoading;


  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());
  const [selectedSuggestionRequest, setSelectedSuggestionRequest] = useState<SuggestionRequest | null>(null);
  const [selectedItem, setSelectedItem] = useState<LeverageLoopPerson | null>(null);

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
    setSelectedItem(item);
    // When you select leverage loop person, deselect the selected suggestion request
    setSelectedSuggestionRequest(null);
    onSectionChange("copilot"); // Open Copilot chat when item is selected
  };
  const handleSuggestionRequestSelect = (suggestionRequest: SuggestionRequest) => {
    setSelectedSuggestionRequest(suggestionRequest);
    // When you select leverage loop suggestion, deselect the selected person
    setSelectedItem(null);
    onSectionChange("copilot");
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
              selectedItem={selectedItem ?? null}
              selectedSuggestionRequest={selectedSuggestionRequest ?? null}   
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
