import { useState } from "react";
import styles from "./CopilotSidebar.module.scss";
import OrbiterLogo from "@/react_app/assets/sidebar/Orbiter logo.svg";
import OutcomesLogo from "@/react_app/assets/sidebar/target-arrow.svg";
import LeverageLoopsLogo from "@/react_app/assets/sidebar/swirl.svg";

export type SidebarSection = "copilot" | "outcomes" | "leverage-loops";

interface CopilotSidebarProps {
  activeSection: SidebarSection;
  onSectionChange: (section: SidebarSection) => void;
}

interface SuggestionItem {
  id: string;
  label: string;
  status: "completed" | "in-progress" | "pending" | "archived";
  children?: SuggestionItem[];
}

// Sample data for Outcomes section
const outcomesData: SuggestionItem[] = [
  { id: "1", label: "Brand Identity Design", status: "completed" },
  {
    id: "2",
    label: "Identify Launch Partners",
    status: "in-progress",
    children: [
      {
        id: "2a",
        label: "Map Your Partnership Categories",
        status: "completed",
      },
      {
        id: "2b",
        label: "Research & Score Potential Partners",
        status: "in-progress",
      },
      {
        id: "2c",
        label: "Build Your Partnership Value Prop",
        status: "pending",
      },
      { id: "2d", label: "Identify Key Stakeholders", status: "pending" },
      { id: "2e", label: "Create Outreach Sequence", status: "pending" },
      { id: "2f", label: "Secure Agreements", status: "pending" },
    ],
  },
  { id: "3", label: "Onboard Operator Pilots", status: "pending" },
  { id: "4", label: "1st Paying Enterprise Pilot", status: "pending" },
  { id: "5", label: "Close $30M+ Seed Round", status: "pending" },
  { id: "6", label: "Press Pickup", status: "pending" },
  { id: "7", label: "Archived", status: "archived" },
];

// Sample data for Leverage Loops section
const leverageLoopsData: SuggestionItem[] = [
  { id: "l1", label: "Customer Feedback Loop", status: "completed" },
  { id: "l2", label: "Product Iteration Cycle", status: "in-progress" },
  { id: "l3", label: "Growth Experiments", status: "pending" },
];

const StatusIcon: React.FC<{ status: SuggestionItem["status"] }> = ({
  status,
}) => {
  switch (status) {
    case "completed":
      return (
        <span className={styles.statusIcon} data-status="completed">
          ✓
        </span>
      );
    case "in-progress":
      return (
        <span className={styles.statusIcon} data-status="in-progress">
          ◐
        </span>
      );
    case "pending":
      return (
        <span className={styles.statusIcon} data-status="pending">
          ○
        </span>
      );
    case "archived":
      return (
        <span className={styles.statusIcon} data-status="archived">
          📁
        </span>
      );
    default:
      return null;
  }
};

export const CopilotSidebar: React.FC<CopilotSidebarProps> = ({
  activeSection,
  onSectionChange,
}) => {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set()
  );
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());
  const [searchQueries, setSearchQueries] = useState<Record<string, string>>({
    outcomes: "",
    "leverage-loops": "",
  });

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

  const toggleItem = (itemId: string) => {
    setExpandedItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(itemId)) {
        newSet.delete(itemId);
      } else {
        newSet.add(itemId);
      }
      return newSet;
    });
  };

  const filterItems = (
    items: SuggestionItem[],
    query: string
  ): SuggestionItem[] => {
    if (!query) return items;
    return items.filter(
      (item) =>
        item.label.toLowerCase().includes(query.toLowerCase()) ||
        item.children?.some((child) =>
          child.label.toLowerCase().includes(query.toLowerCase())
        )
    );
  };

  const renderSuggestionItem = (item: SuggestionItem, isChild = false) => {
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedItems.has(item.id);

    return (
      <div key={item.id} className={styles.suggestionItemWrapper}>
        <button
          className={`${styles.suggestionItem} ${
            isChild ? styles.childItem : ""
          }`}
          onClick={() => hasChildren && toggleItem(item.id)}
        >
          <StatusIcon status={item.status} />
          <span className={styles.suggestionLabel}>{item.label}</span>
          {hasChildren && (
            <span
              className={`${styles.expandArrow} ${
                isExpanded ? styles.expanded : ""
              }`}
            >
              ▸
            </span>
          )}
          <button
            className={styles.moreButton}
            onClick={(e) => e.stopPropagation()}
          >
            ⋮
          </button>
        </button>
        {hasChildren && isExpanded && (
          <div className={styles.childrenContainer}>
            {item.children!.map((child) => renderSuggestionItem(child, true))}
          </div>
        )}
      </div>
    );
  };

  const renderExpandableContent = (
    sectionId: "outcomes" | "leverage-loops"
  ) => {
    const data = sectionId === "outcomes" ? outcomesData : leverageLoopsData;
    const filteredData = filterItems(data, searchQueries[sectionId] || "");

    return (
      <div className={styles.expandedContent}>
        <div className={styles.searchContainer}>
          <span className={styles.searchIcon}>🔍</span>
          <input
            type="text"
            placeholder="Search..."
            className={styles.searchInput}
            value={searchQueries[sectionId]}
            onChange={(e) =>
              setSearchQueries((prev) => ({
                ...prev,
                [sectionId]: e.target.value,
              }))
            }
          />
        </div>
        <div className={styles.suggestionsList}>
          {filteredData.map((item) => renderSuggestionItem(item))}
        </div>
      </div>
    );
  };

  return (
    <div className={styles.sidebar}>
      <nav className={styles.sidebarNav}>
        {/* Copilot Section */}
        <button
          className={`${styles.sidebarItem} ${
            activeSection === "copilot" ? styles.active : ""
          }`}
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
          <div
            className={`${styles.sectionHeader} ${
              activeSection === "outcomes" ? styles.active : ""
            }`}
          >
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
              <span
                className={`${styles.plusIcon} ${
                  expandedSections.has("outcomes") ? styles.rotated : ""
                }`}
              >
                +
              </span>
            </button>
          </div>
          {expandedSections.has("outcomes") &&
            renderExpandableContent("outcomes")}
        </div>

        {/* Leverage Loops Section */}
        <div className={styles.sectionWrapper}>
          <div
            className={`${styles.sectionHeader} ${
              activeSection === "leverage-loops" ? styles.active : ""
            }`}
          >
            <button
              className={styles.sidebarItemInHeader}
              onClick={() => onSectionChange("leverage-loops")}
              aria-label="Leverage Loops"
            >
              <span className={styles.sidebarIcon}>
                <img
                  src={LeverageLoopsLogo}
                  alt="Leverage Loops"
                  width={18}
                  height={18}
                />
              </span>
              <span className={styles.sidebarLabel}>Leverage Loops</span>
            </button>
            <button
              className={styles.plusButton}
              onClick={() => toggleSection("leverage-loops")}
              aria-label="Expand Leverage Loops"
            >
              <span
                className={`${styles.plusIcon} ${
                  expandedSections.has("leverage-loops") ? styles.rotated : ""
                }`}
              >
                +
              </span>
            </button>
          </div>
          {expandedSections.has("leverage-loops") &&
            renderExpandableContent("leverage-loops")}
        </div>
      </nav>
    </div>
  );
};
