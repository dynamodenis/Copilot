import { useState } from "react";
import styles from "./ExpandableContent.module.scss";
import type { SuggestionItem, ContentType } from "./types";

interface ExpandableContentProps {
  contentType: ContentType;
  items: SuggestionItem[];
  selectedItemId: string | null;
  onItemSelect: (item: SuggestionItem) => void;
  isLoading?: boolean;
  emptyMessage?: string;
}

const StatusIcon: React.FC<{ status: SuggestionItem["status"] }> = ({ status }) => {
  switch (status) {
    case "completed":
      return <span className={styles.statusIcon} data-status="completed">✓</span>;
    case "in-progress":
      return <span className={styles.statusIcon} data-status="in-progress">◐</span>;
    case "pending":
      return <span className={styles.statusIcon} data-status="pending">○</span>;
    case "archived":
      return <span className={styles.statusIcon} data-status="archived">📁</span>;
    default:
      return null;
  }
};

export const ExpandableContent: React.FC<ExpandableContentProps> = ({
  contentType,
  items,
  selectedItemId,
  onItemSelect,
  isLoading = false,
  emptyMessage = "No items found",
}) => {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());
  const [searchQuery, setSearchQuery] = useState("");

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

  const filterItems = (items: SuggestionItem[], query: string): SuggestionItem[] => {
    if (!query) return items;
    return items.filter((item) =>
      item.label.toLowerCase().includes(query.toLowerCase()) ||
      item.children?.some((child) =>
        child.label.toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  const renderSuggestionItem = (item: SuggestionItem, isChild = false) => {
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedItems.has(item.id);
    const isSelected = selectedItemId === item.id;

    return (
      <div key={item.id} className={styles.suggestionItemWrapper}>
        <button
          className={`${styles.suggestionItem} ${isChild ? styles.childItem : ""} ${isSelected ? styles.selected : ""}`}
          onClick={() => {
            if (hasChildren) {
              toggleItem(item.id);
            }
            onItemSelect(item);
          }}
        >
          <StatusIcon status={item.status} />
          <span className={styles.suggestionLabel}>{item.label}</span>
          {hasChildren && (
            <span className={`${styles.expandArrow} ${isExpanded ? styles.expanded : ""}`}>
              ▸
            </span>
          )}
          <button className={styles.moreButton} onClick={(e) => e.stopPropagation()}>
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

  const filteredItems = filterItems(items, searchQuery);

  return (
    <div className={styles.expandedContent}>
      <div className={styles.searchContainer}>
        <span className={styles.searchIcon}>🔍</span>
        <input
          type="text"
          placeholder={`Search ${contentType === "outcomes" ? "outcomes" : "leverage loops"}...`}
          className={styles.searchInput}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className={styles.suggestionsList}>
        {isLoading ? (
          <div className={styles.loadingState}>
            <span className={styles.loadingSpinner}></span>
            Loading...
          </div>
        ) : filteredItems.length === 0 ? (
          <div className={styles.emptyState}>
            {searchQuery ? `No results for "${searchQuery}"` : emptyMessage}
          </div>
        ) : (
          filteredItems.map((item) => renderSuggestionItem(item))
        )}
      </div>
    </div>
  );
};

export default ExpandableContent;

