/**
 * Types for the custom chat implementation using C1Component
 */

export interface ChatMessage {
  id: string;
  role: "user" | "assistant" | "system";
  content: string;
  timestamp: Date;
  isStreaming?: boolean;
}

export interface PendingAction {
  humanFriendlyMessage: string;
  llmFriendlyMessage: string;
}

export interface ActionEvent {
  type?: string;
  params?: {
    humanFriendlyMessage?: string;
    llmFriendlyMessage?: string;
    url?: string;
    [key: string]: unknown;
  };
}

export type SendMessageFn = (content: string) => Promise<void>;

