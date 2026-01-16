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

interface ChatContextStore {
  // Current active chat context
  activeContext: ChatContext;
  
  // Selected items for leverage loops
  selectedPerson: LeverageLoopPerson | null;
  selectedSuggestionRequest: SuggestionRequest | null;

  leverageLoopSummaries: ChatSummaryType[];
  
  // Separate chat states for each context
  copilotChat: ChatState;
  outcomesChat: ChatState;
  // Keyed by person full_name or suggestion request request_panel_title
  leverageLoopChats: LeverageLoopChats;
  
  // Actions
  setActiveContext: (context: ChatContext) => void;
  setSelectedPerson: (person: LeverageLoopPerson | null) => void;
  setSelectedSuggestionRequest: (request: SuggestionRequest | null) => void;
  upsertLeverageLoopSummary: (summary: ChatSummaryType) => void;

  // Chat state actions
  addMessage: (context: ChatContext, message: ChatMessageType, chatKey?: string) => void;
  updateMessage: (context: ChatContext, messageId: string, content: string, isStreaming?: boolean, chatKey?: string) => void;
  setIsLoading: (context: ChatContext, isLoading: boolean, chatKey?: string) => void;
  clearChat: (context: ChatContext, chatKey?: string) => void;
  
  // Helper to get current leverage loop chat key
  getCurrentLeverageLoopKey: () => string | null;
  // Helper to get current leverage loop chat state
  getCurrentLeverageLoopChat: () => ChatState;
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
    
    copilotChat: createInitialChatState("copilot"),
    outcomesChat: createInitialChatState("outcomes"),
    leverageLoopChats: {},
    
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
  }), { name: "ChatContextStore" })
);

// Helper function to get the correct chat state key for non-leverage-loop contexts
function getChatKey(context: ChatContext): keyof Pick<ChatContextStore, "copilotChat" | "outcomesChat"> {
  switch (context) {
    case "copilot":
      return "copilotChat";
    case "outcomes":
      return "outcomesChat";
    default:
      return "copilotChat"; // Fallback, leverage-loops handled separately
  }
}

