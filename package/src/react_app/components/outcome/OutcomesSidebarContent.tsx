import { useState, useRef, useEffect } from "react";
import { useShallow } from "zustand/react/shallow";
import { Trash2, Edit3 } from "lucide-react";
import styles from "./OutcomesSidebarContent.module.scss";
import type { SuggestionRequest, OutcomeStepPlan } from "@/react_app/store/leverageLoopsStore";
import { useLeverageLoopsStore } from "@/react_app/store/leverageLoopsStore";

// Import status SVGs
import PlannedIcon from "@/react_app/assets/sidebar/planned.svg";
import InProgressIcon from "@/react_app/assets/sidebar/in-progress.svg";
import CompletedIcon from "@/react_app/assets/sidebar/completed.svg";
import CaretRightIcon from "@/react_app/assets/sidebar/caret-right.svg";

interface OutcomesSidebarContentProps {
  selectedSuggestionRequest: SuggestionRequest | null;
  onSuggestionRequestSelect: (request: SuggestionRequest) => void;
}

// Status icon component for outcome step plans
const OutcomeStatusIcon: React.FC<{ status: OutcomeStepPlan["status"] }> = ({ status }) => {
  switch (status) {
    case "planned":
      return <img src={PlannedIcon} alt="Planned" className={styles.statusIcon} />;
    case "in progress":
      return <img src={InProgressIcon} alt="In Progress" className={`${styles.statusIcon} ${styles.completedStatusIcon}`} />;
    case "complete":
      return <img src={CompletedIcon} alt="Complete" className={styles.statusIcon} />;
    default:
      return <img src={PlannedIcon} alt="Unknown" className={styles.statusIcon} />;
  }
};

export const OutcomesSidebarContent: React.FC<OutcomesSidebarContentProps> = ({
  selectedSuggestionRequest,
  onSuggestionRequestSelect,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedOutcomes, setExpandedOutcomes] = useState<Set<number>>(new Set());
  const [openMenuId, setOpenMenuId] = useState<number | null>(null);
  const [openStepMenuId, setOpenStepMenuId] = useState<number | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const stepMenuRef = useRef<HTMLDivElement>(null);

  const {
    outcomesSuggestionRequests,
    isLoadingSuggestionRequests,
    suggestionRequestsError,
    deleteSuggestionRequest,
    isDeletingSuggestionRequest,
  } = useLeverageLoopsStore(
    useShallow((state) => ({
      outcomesSuggestionRequests: state.outcomesSuggestionRequests,
      isLoadingSuggestionRequests: state.isLoadingSuggestionRequests,
      suggestionRequestsError: state.suggestionRequestsError,
      deleteSuggestionRequest: state.deleteSuggestionRequest,
      isDeletingSuggestionRequest: state.isDeletingSuggestionRequest,
    }))
  );

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpenMenuId(null);
      }
      if (stepMenuRef.current && !stepMenuRef.current.contains(event.target as Node)) {
        setOpenStepMenuId(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Filter outcomes based on search query
  const filterOutcomes = (outcomes: SuggestionRequest[], query: string): SuggestionRequest[] => {
    if (!query) return outcomes;
    return outcomes.filter((outcome) =>
      outcome.request_panel_title?.toLowerCase().includes(query.toLowerCase()) ||
      outcome.request_header_title?.toLowerCase().includes(query.toLowerCase()) ||
      outcome.request_context?.toLowerCase().includes(query.toLowerCase())
    );
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleDeleteOutcome = async (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    if (isDeletingSuggestionRequest) return;
    await deleteSuggestionRequest(id);
    setOpenMenuId(null);
  };

  const handleEditOutcome = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    console.log("Edit outcome:", id);
    setOpenMenuId(null);
  };

  const handleDeleteStepPlan = async (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    // TODO: Implement step plan deletion when API is ready
    console.log("Delete step plan:", id);
    setOpenStepMenuId(null);
  };

  const handleEditStepPlan = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    console.log("Edit step plan:", id);
    setOpenStepMenuId(null);
  };

  const toggleOutcomeExpanded = (outcomeId: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedOutcomes((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(outcomeId)) {
        newSet.delete(outcomeId);
      } else {
        newSet.add(outcomeId);
      }
      return newSet;
    });
  };

  const renderStepPlan = (step: OutcomeStepPlan) => {
    return (
      <div key={step.id} className={styles.stepPlanItem}>
        <OutcomeStatusIcon status={step.status} />

        <div className={styles.stepPlanInfo}>
          <span className={styles.stepPlanDescription}>{step.step_description}</span>
        </div>

        <div className={styles.moreButtonWrapper} ref={openStepMenuId === step.id ? stepMenuRef : null}>
          <span
            className={styles.moreButton}
            role="button"
            tabIndex={0}
            onClick={(e) => {
              e.stopPropagation();
              setOpenStepMenuId(openStepMenuId === step.id ? null : step.id!);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.stopPropagation();
                setOpenStepMenuId(openStepMenuId === step.id ? null : step.id!);
              }
            }}
          >
            ⋮
          </span>

          {openStepMenuId === step.id && (
            <div className={styles.actionMenu}>
              <button
                className={styles.actionMenuItem}
                onClick={(e) => handleEditStepPlan(step.id!, e)}
              >
                <Edit3 size={14} />
                <span>Edit</span>
              </button>
              <button
                className={`${styles.actionMenuItem} ${styles.deleteAction}`}
                onClick={(e) => handleDeleteStepPlan(step.id!, e)}
              >
                <Trash2 size={14} />
                <span>Delete</span>
              </button>
            </div>
          )}
        </div>
      </div>
    );
  };

  const renderOutcome = (outcome: SuggestionRequest) => {
    const isSelected = selectedSuggestionRequest?.id === outcome.id;
    const hasStepPlans = outcome.outcome_plan_steps && outcome.outcome_plan_steps.length > 0;
    const isExpanded = outcome.id !== undefined && expandedOutcomes.has(outcome.id);

    return (
      <div key={outcome.id} className={styles.outcomeItemWrapper}>
        <div
          className={`${styles.outcomeItem} ${isSelected ? styles.selected : ""}`}
          onClick={() => onSuggestionRequestSelect(outcome)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              onSuggestionRequestSelect(outcome);
            }
          }}
        >

          {/* Outcome info */}
          <div className={styles.outcomeInfo}>
            <span className={styles.outcomeName}>{outcome.request_panel_title || outcome.request_header_title}</span>
          </div>


          {/* Expand caret - only show if has step plans */}
          {hasStepPlans ? (
            <span
              className={`${styles.expandCaret} ${isExpanded ? styles.expanded : ""}`}
              onClick={(e) => outcome.id !== undefined && toggleOutcomeExpanded(outcome.id, e)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" && outcome.id !== undefined) {
                  e.stopPropagation();
                  toggleOutcomeExpanded(outcome.id, e as unknown as React.MouseEvent);
                }
              }}
            >
              <img src={CaretRightIcon} alt="Expand" />
            </span>
          ) : (
            <span className={styles.expandCaretPlaceholder} />
          )}

          {/* More button */}
          {outcome.id !== undefined && (
            <div className={styles.moreButtonWrapper} ref={openMenuId === outcome.id ? menuRef : null}>
              <span
                className={styles.moreButton}
                role="button"
                tabIndex={0}
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenMenuId(openMenuId === outcome.id ? null : outcome.id!);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.stopPropagation();
                    setOpenMenuId(openMenuId === outcome.id ? null : outcome.id!);
                  }
                }}
              >
                ⋮
              </span>
              {openMenuId === outcome.id && (
                <div className={styles.actionMenu}>
                  <button
                    className={styles.actionMenuItem}
                    onClick={(e) => handleEditOutcome(outcome.id!, e)}
                  >
                    <Edit3 size={14} />
                    <span>Edit</span>
                  </button>
                  <button
                    className={`${styles.actionMenuItem} ${styles.deleteAction}`}
                    onClick={(e) => handleDeleteOutcome(outcome.id!, e)}
                    disabled={isDeletingSuggestionRequest}
                  >
                    <Trash2 size={14} />
                    <span>{isDeletingSuggestionRequest ? "Deleting..." : "Delete"}</span>
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Expanded step plans */}
        {hasStepPlans && isExpanded && (
          <div className={styles.stepPlansContainer}>
            {outcome.outcome_plan_steps!.map((step) => renderStepPlan(step))}
          </div>
        )}
      </div>
    );
  };

  const filteredOutcomes = filterOutcomes(outcomesSuggestionRequests, searchQuery);

  return (
    <div className={styles.sidebarContent}>
      {/* Search */}
      <div className={styles.searchWrapper}>
        <div className={styles.searchContainer}>
          <span className={styles.searchIcon}>🔍</span>
          <input
            type="text"
            placeholder="Search outcomes..."
            className={styles.searchInput}
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
      </div>

      {/* Outcomes List */}
      <div className={styles.outcomesList}>
        {isLoadingSuggestionRequests ? (
          <div className={styles.loadingState}>
            <span className={styles.loadingSpinner}></span>
            Loading outcomes...
          </div>
        ) : suggestionRequestsError ? (
          <div className={styles.errorState}>{suggestionRequestsError}</div>
        ) : filteredOutcomes.length === 0 ? (
          <div className={styles.emptyState}>
            {searchQuery ? `No outcomes found for "${searchQuery}"` : "No outcomes yet"}
          </div>
        ) : (
          filteredOutcomes.map((outcome) => renderOutcome(outcome))
        )}
      </div>
    </div>
  );
};

export default OutcomesSidebarContent;
