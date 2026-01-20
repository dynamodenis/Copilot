import { create } from "zustand";
import { devtools } from "zustand/middleware";
import type { LeverageLoopPerson, SuggestionRequest } from "./leverageLoopsStore";

export type ChatContext = "copilot" | "outcomes" | "leverage-loops";

export interface ChatState {
  messages: ChatMessageType[];
  threadId: string;
  isLoading: boolean;
}

export interface ChatMessageType {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
  isStreaming?: boolean;
}

export interface ChatSummaryType {
  id: string;
  content: string;
  timestamp: Date;
}

// Leverage loops uses keyed chat states - one per person/suggestion request
export type LeverageLoopChats = Record<string, ChatState>;

export type OutcomesChats = Record<string, ChatState>;

// Track which button action was selected per chat key
export type SelectedActions = Record<string, string>;

interface ChatContextStore {
  // Current active chat context
  activeContext: ChatContext;
  
  // Selected items for leverage loops and outcomes
  selectedPerson: LeverageLoopPerson | null;
  selectedSuggestionRequest: SuggestionRequest | null;

  leverageLoopSummaries: ChatSummaryType[];
  outcomesSummaries: ChatSummaryType[];
  
  
  // Track selected button action per chat (keyed by chatKey)
  selectedActions: SelectedActions;
  
  // Separate chat states for each context
  copilotChat: ChatState;
  // Keyed by person full_name or suggestion request request_panel_title
  leverageLoopChats: LeverageLoopChats;
  outcomesChats: OutcomesChats;
  
  // Actions
  setActiveContext: (context: ChatContext) => void;
  setSelectedPerson: (person: LeverageLoopPerson | null) => void;
  setSelectedSuggestionRequest: (request: SuggestionRequest | null) => void;
  setSelectedOutcome: (outcome: SuggestionRequest | null) => void;
  upsertLeverageLoopSummary: (summary: ChatSummaryType) => void;
  upsertOutcomesSummary: (summary: ChatSummaryType) => void;
  setSelectedAction: (chatKey: string, actionType: string) => void;
  getSelectedAction: (chatKey: string) => string | null;

  // Chat state actions
  addMessage: (context: ChatContext, message: ChatMessageType, chatKey?: string) => void;
  updateMessage: (context: ChatContext, messageId: string, content: string, isStreaming?: boolean, chatKey?: string) => void;
  setIsLoading: (context: ChatContext, isLoading: boolean, chatKey?: string) => void;
  clearChat: (context: ChatContext, chatKey?: string) => void;
  
  // Helper to get current leverage loop chat key
  getCurrentLeverageLoopKey: () => string | null;
  // Helper to get current leverage loop chat state
  getCurrentLeverageLoopChat: () => ChatState;
  // Helper to get current outcomes chat key
  getCurrentOutcomesKey: () => string;
  // Helper to get current outcomes chat state
  getCurrentOutcomesChat: () => ChatState;
}

const createInitialChatState = (contextId: string): ChatState => ({
  messages: [],
  threadId: `thread-${contextId}-${Date.now()}`,
  isLoading: false,
});

// Default empty chat state for when no leverage loop is selected
const EMPTY_CHAT_STATE: ChatState = {
  messages: [],
  threadId: "thread-empty",
  isLoading: false,
};

export const useChatContextStore = create<ChatContextStore>()(
  devtools((set, get) => ({
    activeContext: "copilot",
    selectedPerson: null,
    selectedSuggestionRequest: null,
    leverageLoopSummaries: [],
    outcomesSummaries: [],
    selectedActions: {},
    
    copilotChat: createInitialChatState("copilot"),
    leverageLoopChats: {},
    outcomesChats: {},
    
    setActiveContext: (context) => set({ activeContext: context }),
    
    setSelectedPerson: (person) => set((state) => ({
      selectedPerson: person,
      selectedSuggestionRequest: person ? null : state.selectedSuggestionRequest,
      activeContext: "leverage-loops",
    })),
    
    setSelectedSuggestionRequest: (request) => set((state) => ({
      selectedSuggestionRequest: request,
      selectedPerson: request ? null : state.selectedPerson,
      activeContext: "leverage-loops",
    })),
    
    setSelectedOutcome: (outcome) => set({
      selectedSuggestionRequest: outcome,
      activeContext: "outcomes",
    }),
    
    // Helper to get current leverage loop chat key based on selection
    getCurrentLeverageLoopKey: () => {
      const state = get();
      if (state.selectedPerson) {
        return state.selectedPerson.full_name;
      }
      if (state.selectedSuggestionRequest) {
        return state.selectedSuggestionRequest.request_panel_title;
      }
      return "leverage-loop-default";
    },
    
    // Helper to get current leverage loop chat state
    getCurrentLeverageLoopChat: () => {
      const state = get();
      const key = state.getCurrentLeverageLoopKey();
      if (key && state.leverageLoopChats[key]) {
        return state.leverageLoopChats[key];
      }
      // Return empty state for default case - will be initialized with message
      return EMPTY_CHAT_STATE;
    },
    
    // Helper to get current outcomes chat key
    getCurrentOutcomesKey: () => {
      const state = get();
      if (state.selectedSuggestionRequest) {
        return state.selectedSuggestionRequest.request_panel_title || state.selectedSuggestionRequest.request_header_title || "outcomes-default";
      }
      return "outcomes-default";
    },

    getCurrentOutcomesChat: () => {
      const state = get();
      const key = state.getCurrentOutcomesKey();
  
      if (key && state.outcomesChats[key]) {
        return state.outcomesChats[key];
      }
      // Return empty state for default case - will be initialized with message
      return EMPTY_CHAT_STATE;
    },
    
    addMessage: (context, message, chatKey) => set((state) => {
      if (context === "leverage-loops") {
        const key = chatKey || state.getCurrentLeverageLoopKey();
        if (!key) return state;
        
        const existingChat = state.leverageLoopChats[key] || createInitialChatState(`leverage-loop-${key}`);
        return {
          leverageLoopChats: {
            ...state.leverageLoopChats,
            [key]: {
              ...existingChat,
              messages: [...existingChat.messages, message],
            },
          },
        };
      }

      if (context === "outcomes") {
        const key = chatKey || state.getCurrentOutcomesKey();
        if (!key) return state;
        
        const existingChat = state.outcomesChats[key] || createInitialChatState(`outcomes-${key}`);
        return {
          outcomesChats: {
            ...state.outcomesChats,
            [key]: {
              ...existingChat,
              messages: [...existingChat.messages, message],
            },
          },
        };
      }
      
      const stateKey = getChatKey(context);
      return {
        [stateKey]: {
          ...state[stateKey],
          messages: [...state[stateKey].messages, message],
        },
      };
    }),
    
    updateMessage: (context, messageId, content, isStreaming, chatKey) => set((state) => {
      if (context === "leverage-loops") {
        const key = chatKey || state.getCurrentLeverageLoopKey();
        if (!key) return state;
        
        const existingChat = state.leverageLoopChats[key];
        if (!existingChat) return state;
        
        return {
          leverageLoopChats: {
            ...state.leverageLoopChats,
            [key]: {
              ...existingChat,
              messages: existingChat.messages.map((msg) =>
                msg.id === messageId
                  ? { ...msg, content, isStreaming: isStreaming ?? msg.isStreaming }
                  : msg
              ),
            },
          },
        };
      }

      if (context === "outcomes") {
        const key = chatKey || state.getCurrentOutcomesKey();
        if (!key) return state;
        
        const existingChat = state.outcomesChats[key];
        if (!existingChat) return state;
        
        return {
          outcomesChats: {
            ...state.outcomesChats,
            [key]: {
              ...existingChat,
              messages: existingChat.messages.map((msg) =>
                msg.id === messageId
                  ? { ...msg, content, isStreaming: isStreaming ?? msg.isStreaming }
                  : msg
              ),
            },
          },
        };
      }
      
      const stateKey = getChatKey(context);
      return {
        [stateKey]: {
          ...state[stateKey],
          messages: state[stateKey].messages.map((msg) =>
            msg.id === messageId
              ? { ...msg, content, isStreaming: isStreaming ?? msg.isStreaming }
              : msg
          ),
        },
      };
    }),
    
    setIsLoading: (context, isLoading, chatKey) => set((state) => {
      if (context === "leverage-loops") {
        const key = chatKey || state.getCurrentLeverageLoopKey();
        if (!key) return state;
        
        const existingChat = state.leverageLoopChats[key] || createInitialChatState(`leverage-loop-${key}`);
        return {
          leverageLoopChats: {
            ...state.leverageLoopChats,
            [key]: {
              ...existingChat,
              isLoading,
            },
          },
        };
      }

      if (context === "outcomes") {
        const key = chatKey || state.getCurrentOutcomesKey();
        if (!key) return state;
        
        const existingChat = state.outcomesChats[key] || createInitialChatState(`outcomes-${key}`);
        return {
          outcomesChats: {
            ...state.outcomesChats,
            [key]: {
              ...existingChat,
              isLoading,
            },
          },
        };
      }
      
      const stateKey = getChatKey(context);
      return {
        [stateKey]: {
          ...state[stateKey],
          isLoading,
        },
      };
    }),
    
    clearChat: (context, chatKey) => set((state) => {
      if (context === "leverage-loops") {
        const key = chatKey || state.getCurrentLeverageLoopKey();
        if (!key) return state;
        
        return {
          leverageLoopChats: {
            ...state.leverageLoopChats,
            [key]: createInitialChatState(`leverage-loop-${key}`),
          },
        };
      }

      if (context === "outcomes") {
        const key = chatKey || state.getCurrentOutcomesKey();
        if (!key) return state;
        
        return {
          outcomesChats: {
            ...state.outcomesChats,
            [key]: createInitialChatState(`outcomes-${key}`),
          },
        };
      }
      
      const stateKey = getChatKey(context);
      return {
        [stateKey]: createInitialChatState(context),
      };
    }),

    upsertLeverageLoopSummary: (summary) => set((state) => {
      const existingIndex = state.leverageLoopSummaries.findIndex((s) => s.id === summary.id);
      if (existingIndex >= 0) {
        // Update existing summary
        return {
          leverageLoopSummaries: state.leverageLoopSummaries.map((s) => s.id === summary.id ? summary : s),
        };
      } else {
        // Add new summary
        return {
          leverageLoopSummaries: [...state.leverageLoopSummaries, summary],
        };
      }
    }),

    upsertOutcomesSummary: (summary) => set((state) => {
      const existingIndex = state.outcomesSummaries.findIndex((s) => s.id === summary.id);
      if (existingIndex >= 0) {
        // Update existing summary
        return {
          outcomesSummaries: state.outcomesSummaries.map((s) => s.id === summary.id ? summary : s),
        };
      } else {
        // Add new summary
        return {
          outcomesSummaries: [...state.outcomesSummaries, summary],
        };
      }
    }),

    setSelectedAction: (chatKey, actionType) => set((state) => ({
      selectedActions: {
        ...state.selectedActions,
        [chatKey]: actionType,
      },
    })),

    getSelectedAction: (chatKey) => {
      const state = get();
      return state.selectedActions[chatKey] || null;
    },
  }), { name: "ChatContextStore" })
);

// Helper function to get the correct chat state key for copilot context only
// (leverage-loops and outcomes use keyed chats and are handled separately)
function getChatKey(_context: ChatContext): "copilotChat" {
  return "copilotChat";
}

