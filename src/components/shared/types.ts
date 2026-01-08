// Shared types for sidebar and expandable content

export interface SuggestionItem {
  id: string;
  label: string;
  status: "completed" | "in-progress" | "pending" | "archived";
  children?: SuggestionItem[];
}

export type ContentType = "outcomes" | "leverage-loops";

