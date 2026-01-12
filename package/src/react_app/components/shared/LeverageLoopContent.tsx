import { useState, useRef, useEffect } from "react";
import { useShallow } from "zustand/react/shallow";
import styles from "./LeverageLoopContent.module.scss";
import type { ContentType } from "./types";
import type { LeverageLoopPerson, SuggestionRequest } from "@/react_app/store/leverageLoopsStore";
import { useLeverageLoopsStore } from "@/react_app/store/leverageLoopsStore";


interface LeverageLoopContentProps {
  contentType: ContentType;
  items: LeverageLoopPerson[];
  selectedItem: LeverageLoopPerson | null;
  onItemSelect: (item: LeverageLoopPerson) => void;
  emptyMessage?: string;
  selectedSuggestionRequest: SuggestionRequest | null;
  onSuggestionRequestSelect: (suggestionRequest: SuggestionRequest) => void;
}

const StatusIcon: React.FC<{ status: SuggestionRequest["status"] }> = ({ status }) => {
  switch (status) {
    case "draft":
      return <span className={styles.statusIcon} data-status="draft">📝</span>;
    case "suggestion":
      return <span className={styles.statusIcon} data-status="suggestion">💡</span>;
    case "processing":
      return <span className={styles.statusIcon} data-status="processing">⏳</span>;
    case "archived":
      return <span className={styles.statusIcon} data-status="archived">📦</span>;
    default:
      return <span className={styles.statusIcon} data-status="unknown">❓</span>;
  }
};

export const LeverageLoopContent: React.FC<LeverageLoopContentProps> = ({
  contentType: _contentType,
  items,
  selectedItem,
  onItemSelect,
  emptyMessage = "No items found",
  selectedSuggestionRequest,
  onSuggestionRequestSelect,
}) => {
  void _contentType; // Reserved for future use
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());
  const [searchQuery, setSearchQuery] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  const { suggestionRequests: _suggestionRequests, leverageLoops, isLoadingPersons, isLoadingSuggestionRequests, personsError, suggestionRequestsError } = useLeverageLoopsStore(
    useShallow((state) => ({
      suggestionRequests: state.suggestionRequests,
      leverageLoops: state.leverageLoops,
      isLoadingPersons: state.isLoadingPersons,
      isLoadingSuggestionRequests: state.isLoadingSuggestionRequests,
      personsError: state.personsError,
      suggestionRequestsError: state.suggestionRequestsError,
    }))
  );


  void expandedItems;

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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

  const filterLeverageLoopPersons = (persons: LeverageLoopPerson[], query: string): LeverageLoopPerson[] => {
    if (!query) return [];
    return persons.filter((person) =>
      person.full_name?.toLowerCase().includes(query.toLowerCase()) ||
      person.master_person.name?.toLowerCase().includes(query.toLowerCase()) ||
      person.master_person.current_title?.toLowerCase().includes(query.toLowerCase()) ||
      person.master_person.bio?.toLowerCase().includes(query.toLowerCase()) ||
      person.master_person.master_company?.company_name?.toLowerCase().includes(query.toLowerCase())
    );
  };

  const filterSuggestionRequests = (suggestionRequests: SuggestionRequest[], query: string): SuggestionRequest[] => {
    if (!query) return suggestionRequests;
    return suggestionRequests.filter((suggestionRequest) =>
      suggestionRequest.request_panel_title?.toLowerCase().includes(query.toLowerCase()) ||
      suggestionRequest.request_header_title?.toLowerCase().includes(query.toLowerCase()) ||
      suggestionRequest.request_context?.toLowerCase().includes(query.toLowerCase())
    );
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    setIsDropdownOpen(value.length > 0);
  };

  const handlePersonSelect = (person: LeverageLoopPerson) => {
    onItemSelect(person);
    setSearchQuery("");
    setIsDropdownOpen(false);
  };

  const renderPersonDropdownItem = (person: LeverageLoopPerson) => {
    const isSelected = selectedItem?.id === person.id;
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

  const renderSuggestionRequest = (item: SuggestionRequest, isChild = false) => {
    const isSelected = selectedSuggestionRequest?.request_header_title === item.request_header_title;
    return (
      <div key={item.id} className={styles.suggestionItemWrapper}>
        <button
          className={`${styles.suggestionItem} ${isChild ? styles.childItem : ""} ${isSelected ? styles.selected : ""}`}
          onClick={() => {
            toggleItem(item.request_header_title);
            onSuggestionRequestSelect(item);
          }}
        >
          <StatusIcon status={item.status} />
          <span className={styles.suggestionLabel}>{item.request_header_title}</span>
          <button className={styles.moreButton} onClick={(e) => e.stopPropagation()}>
            ⋮
          </button>
        </button>
      </div>
    );
  };

  const filteredPersons = filterLeverageLoopPersons(leverageLoops.length > 0 ? leverageLoops : items, searchQuery);
  // Keep filterSuggestionRequests available for future use
  void filterSuggestionRequests;

  return (
    <div className={styles.expandedContent}>
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
              <div className={styles.dropdownError}>
                {personsError}
              </div>
            ) : filteredPersons.length === 0 ? (
              <div className={styles.dropdownEmpty}>
                No persons found for "{searchQuery}"
              </div>
            ) : (
              filteredPersons.map((person) => renderPersonDropdownItem(person))
            )}
          </div>
        )}
      </div>

      <div className={styles.suggestionsList}>
        {isLoadingSuggestionRequests ? (
          <div className={styles.loadingState}>
            <span className={styles.loadingSpinner}></span>
            Loading suggestion requests...
          </div>
        ) : suggestionRequestsError ? (
          <div className={styles.errorState}>
            {suggestionRequestsError}
          </div>
        ) : _suggestionRequests.length === 0 ? (
          <div className={styles.emptyState}>
            {emptyMessage}
          </div>
        ) : (
          _suggestionRequests.map((suggestionRequest) => renderSuggestionRequest(suggestionRequest))
        )}
      </div>
    </div>
  );
};

export default LeverageLoopContent;
