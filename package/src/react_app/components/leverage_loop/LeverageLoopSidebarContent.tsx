import { useState, useRef, useEffect } from "react";
import { useShallow } from "zustand/react/shallow";
import { Trash2, Edit3 } from "lucide-react";
import styles from "./LeverageLoopSidebarContent.module.scss";
import type { LeverageLoopPerson, SuggestionRequest } from "@/react_app/store/leverageLoopsStore";
import { useLeverageLoopsStore } from "@/react_app/store/leverageLoopsStore";
import { Spinner } from "../shared/Spinner";

interface LeverageLoopSidebarContentProps {
  selectedPerson: LeverageLoopPerson | null;
  selectedSuggestionRequest: SuggestionRequest | null;
  onPersonSelect: (person: LeverageLoopPerson) => void;
  onSuggestionRequestSelect: (request: SuggestionRequest) => void;
}

const StatusIcon: React.FC<{ status: SuggestionRequest["status"] }> = ({ status }) => {
  switch (status) {
    case "draft":
      return <span className={styles.statusIcon} data-status="draft"></span>;
    case "suggestion":
      return <span className={styles.statusIcon} data-status="suggestion"></span>;
    case "processing":
      return <Spinner size={16} />;
    case "archived":
      return <span className={styles.statusIcon} data-status="archived"></span>;
    default:
      return <span className={styles.statusIcon} data-status="unknown"></span>;
  }
};

export const LeverageLoopSidebarContent: React.FC<LeverageLoopSidebarContentProps> = ({
  selectedPerson,
  selectedSuggestionRequest,
  onPersonSelect,
  onSuggestionRequestSelect,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [openMenuId, setOpenMenuId] = useState<number | null>(null);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const {
    suggestionRequests,
    leverageLoops,
    isLoadingPersons,
    isLoadingSuggestionRequests,
    personsError,
    suggestionRequestsError,
    deleteSuggestionRequest,
    isDeletingSuggestionRequest,
  } = useLeverageLoopsStore(
    useShallow((state) => ({
      suggestionRequests: state.suggestionRequests,
      leverageLoops: state.leverageLoops,
      isLoadingPersons: state.isLoadingPersons,
      isLoadingSuggestionRequests: state.isLoadingSuggestionRequests,
      personsError: state.personsError,
      suggestionRequestsError: state.suggestionRequestsError,
      deleteSuggestionRequest: state.deleteSuggestionRequest,
      isDeletingSuggestionRequest: state.isDeletingSuggestionRequest,
    }))
  );

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpenMenuId(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleDeleteSuggestionRequest = async (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    if (isDeletingSuggestionRequest) return;
    await deleteSuggestionRequest(id);
    setOpenMenuId(null);
  };

  const handleEditSuggestionRequest = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    console.log("Edit suggestion request:", id);
    setOpenMenuId(null);
  };

  const filterPersons = (persons: LeverageLoopPerson[], query: string): LeverageLoopPerson[] => {
    if (!query) return [];
    return persons.filter((person) =>
      person.full_name?.toLowerCase().includes(query.toLowerCase()) ||
      person.master_person.name?.toLowerCase().includes(query.toLowerCase()) ||
      person.master_person.current_title?.toLowerCase().includes(query.toLowerCase()) ||
      person.master_person.master_company?.company_name?.toLowerCase().includes(query.toLowerCase())
    );
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    setIsDropdownOpen(value.length > 0);
  };

  const handlePersonSelect = (person: LeverageLoopPerson) => {
    onPersonSelect(person);
    setSearchQuery("");
    setIsDropdownOpen(false);
  };

  const renderPersonDropdownItem = (person: LeverageLoopPerson) => {
    const isSelected = selectedPerson?.id === person.id;
    return (
      <button
        key={person.id}
        className={`${styles.dropdownItem} ${isSelected ? styles.selected : ""}`}
        onClick={() => handlePersonSelect(person)}
      >
        <div className={styles.personAvatar}>
          {person.master_person.avatar ? (
            <img src={person.master_person.avatar} alt={person.full_name} />
          ) : (
            <span className={styles.avatarPlaceholder}>
              {person.full_name?.charAt(0) || "?"}
            </span>
          )}
        </div>
        <div className={styles.personInfo}>
          <span className={styles.personName}>{person.full_name || person.master_person.name}</span>
          {person.master_person.current_title && (
            <span className={styles.personTitle}>
              {person.master_person.current_title}
              {person.master_person.master_company?.company_name && (
                <> at {person.master_person.master_company.company_name}</>
              )}
            </span>
          )}
        </div>
      </button>
    );
  };

  const renderSuggestionRequest = (item: SuggestionRequest) => {
    const isSelected = selectedSuggestionRequest?.id === item.id;
    return (
      <div key={item.id} className={styles.suggestionItemWrapper}>
        <button
          className={`${styles.suggestionItem} ${isSelected ? styles.selected : ""}`}
          onClick={() => onSuggestionRequestSelect(item)}
        >
          <div className={styles.personAvatar}>
            {item.master_person?.avatar ? (
              <img src={item.master_person.avatar} alt={item.master_person.name || "Person"} />
            ) : (
              <span className={styles.avatarPlaceholder}>
                {item.master_person?.name?.charAt(0) || "?"}
              </span>
            )}
          </div>
          <div className={styles.personInfo}>
            <span className={styles.personName}>{item.master_person?.name || item.request_header_title}</span>
            {(item.master_person?.current_title || item.master_person?.company_name) && (
              <span className={styles.personTitle}>
                {item.master_person?.current_title}
                {item.master_person?.current_title && item.master_person?.company_name && " at "}
                {item.master_person?.company_name}
              </span>
            )}
          </div>
          <StatusIcon status={item.status} />
          {item.id !== undefined && (
            <div className={styles.moreButtonWrapper} ref={openMenuId === item.id ? menuRef : null}>
              <span
                className={styles.moreButton}
                role="button"
                tabIndex={0}
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenMenuId(openMenuId === item.id ? null : item.id!);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.stopPropagation();
                    setOpenMenuId(openMenuId === item.id ? null : item.id!);
                  }
                }}
              >
                ⋮
              </span>
              {openMenuId === item.id && (
                <div className={styles.actionMenu}>
                  <button
                    className={styles.actionMenuItem}
                    onClick={(e) => handleEditSuggestionRequest(item.id!, e)}
                  >
                    <Edit3 size={14} />
                    <span>Edit</span>
                  </button>
                  <button
                    className={`${styles.actionMenuItem} ${styles.deleteAction}`}
                    onClick={(e) => handleDeleteSuggestionRequest(item.id!, e)}
                    disabled={isDeletingSuggestionRequest}
                  >
                    <Trash2 size={14} />
                    <span>{isDeletingSuggestionRequest ? "Deleting..." : "Delete"}</span>
                  </button>
                </div>
              )}
            </div>
          )}
        </button>
      </div>
    );
  };

  const filteredPersons = filterPersons(leverageLoops, searchQuery);

  return (
    <div className={styles.sidebarContent}>
      {/* Search */}
      <div className={styles.searchWrapper} ref={searchContainerRef}>
        <div className={styles.searchContainer}>
          <span className={styles.searchIcon}>🔍</span>
          <input
            type="text"
            placeholder="Search persons..."
            className={styles.searchInput}
            value={searchQuery}
            onChange={handleSearchChange}
            onFocus={() => searchQuery.length > 0 && setIsDropdownOpen(true)}
          />
        </div>

        {isDropdownOpen && (
          <div className={styles.searchDropdown}>
            {isLoadingPersons ? (
              <div className={styles.dropdownLoading}>
                <span className={styles.loadingSpinner}></span>
                Loading persons...
              </div>
            ) : personsError ? (
              <div className={styles.dropdownError}>{personsError}</div>
            ) : filteredPersons.length === 0 ? (
              <div className={styles.dropdownEmpty}>No persons found for "{searchQuery}"</div>
            ) : (
              filteredPersons.map((person) => renderPersonDropdownItem(person))
            )}
          </div>
        )}
      </div>

      {/* Suggestion Requests List */}
      <div className={styles.suggestionsList}>
        {isLoadingSuggestionRequests ? (
          <div className={styles.loadingState}>
            <span className={styles.loadingSpinner}></span>
            Loading suggestion requests...
          </div>
        ) : suggestionRequestsError ? (
          <div className={styles.errorState}>{suggestionRequestsError}</div>
        ) : suggestionRequests.length === 0 ? (
          <div className={styles.emptyState}>No leverage loop requests yet</div>
        ) : (
          suggestionRequests.map((request) => renderSuggestionRequest(request))
        )}
      </div>
    </div>
  );
};

export default LeverageLoopSidebarContent;

