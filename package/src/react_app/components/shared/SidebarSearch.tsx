import { useState, useRef, useEffect } from "react";
import styles from "./SidebarSearch.module.scss";

export interface SearchItem {
  id: number | string;
  name: string;
  title?: string;
  company?: string;
  avatar?: string;
}

interface SidebarSearchProps<T extends SearchItem> {
  placeholder?: string;
  items: T[];
  selectedItemId?: number | string | null;
  onItemSelect: (item: T) => void;
  filterFn?: (item: T, query: string) => boolean;
  isLoading?: boolean;
  error?: string | null;
}

export function SidebarSearch<T extends SearchItem>({
  placeholder = "Search...",
  items,
  selectedItemId,
  onItemSelect,
  filterFn,
  isLoading = false,
  error = null,
}: SidebarSearchProps<T>) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);

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

  const defaultFilterFn = (item: T, query: string): boolean => {
    const lowerQuery = query.toLowerCase();
    return !!(
      item.name?.toLowerCase().includes(lowerQuery) ||
      item.title?.toLowerCase().includes(lowerQuery) ||
      item.company?.toLowerCase().includes(lowerQuery)
    );
  };

  const filteredItems = searchQuery
    ? items.filter((item) => (filterFn || defaultFilterFn)(item, searchQuery))
    : [];

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    setIsDropdownOpen(value.length > 0);
  };

  const handleItemSelect = (item: T) => {
    onItemSelect(item);
    setSearchQuery("");
    setIsDropdownOpen(false);
  };

  const renderDropdownItem = (item: T) => {
    const isSelected = selectedItemId === item.id;
    return (
      <button
        key={item.id}
        className={`${styles.dropdownItem} ${isSelected ? styles.selected : ""}`}
        onClick={() => handleItemSelect(item)}
      >
        <div className={styles.itemAvatar}>
          {item.avatar ? (
            <img src={item.avatar} alt={item.name} />
          ) : (
            <span className={styles.avatarPlaceholder}>
              {item.name?.charAt(0) || "?"}
            </span>
          )}
        </div>
        <div className={styles.itemInfo}>
          <span className={styles.itemName}>{item.name}</span>
          {item.title && (
            <span className={styles.itemTitle}>
              {item.title}
              {item.company && <> at {item.company}</>}
            </span>
          )}
        </div>
      </button>
    );
  };

  return (
    <div className={styles.searchWrapper} ref={searchContainerRef}>
      <div className={styles.searchContainer}>
        <span className={styles.searchIcon}>🔍</span>
        <input
          type="text"
          placeholder={placeholder}
          className={styles.searchInput}
          value={searchQuery}
          onChange={handleSearchChange}
          onFocus={() => searchQuery.length > 0 && setIsDropdownOpen(true)}
        />
      </div>

      {isDropdownOpen && (
        <div className={styles.searchDropdown}>
          {isLoading ? (
            <div className={styles.dropdownLoading}>
              <span className={styles.loadingSpinner}></span>
              Loading...
            </div>
          ) : error ? (
            <div className={styles.dropdownError}>{error}</div>
          ) : filteredItems.length === 0 ? (
            <div className={styles.dropdownEmpty}>
              No results found for "{searchQuery}"
            </div>
          ) : (
            filteredItems.map((item) => renderDropdownItem(item))
          )}
        </div>
      )}
    </div>
  );
}

export default SidebarSearch;

