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

interface ChatContextStore {
  // Current active chat context
  activeContext: ChatContext;
  
  // Selected items for leverage loops
  selectedPerson: LeverageLoopPerson | null;
  selectedSuggestionRequest: SuggestionRequest | null;
  
  // Separate chat states for each context
  copilotChat: ChatState;
  outcomesChat: ChatState;
  leverageLoopsChat: ChatState;
  
  // Actions
  setActiveContext: (context: ChatContext) => void;
  setSelectedPerson: (person: LeverageLoopPerson | null) => void;
  setSelectedSuggestionRequest: (request: SuggestionRequest | null) => void;
  
  // Chat state actions
  addMessage: (context: ChatContext, message: ChatMessageType) => void;
  updateMessage: (context: ChatContext, messageId: string, content: string, isStreaming?: boolean) => void;
  setIsLoading: (context: ChatContext, isLoading: boolean) => void;
  clearChat: (context: ChatContext) => void;
}

const createInitialChatState = (contextId: string): ChatState => ({
  messages: [],
  threadId: `thread-${contextId}-${Date.now()}`,
  isLoading: false,
});

export const useChatContextStore = create<ChatContextStore>()(
  devtools((set) => ({
    activeContext: "copilot",
    selectedPerson: null,
    selectedSuggestionRequest: null,
    
    copilotChat: createInitialChatState("copilot"),
    outcomesChat: createInitialChatState("outcomes"),
    leverageLoopsChat: createInitialChatState("leverage-loops"),
    
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
    
    addMessage: (context, message) => set((state) => {
      const chatKey = getChatKey(context);
      return {
        [chatKey]: {
          ...state[chatKey],
          messages: [...state[chatKey].messages, message],
        },
      };
    }),
    
    updateMessage: (context, messageId, content, isStreaming) => set((state) => {
      const chatKey = getChatKey(context);
      return {
        [chatKey]: {
          ...state[chatKey],
          messages: state[chatKey].messages.map((msg) =>
            msg.id === messageId
              ? { ...msg, content, isStreaming: isStreaming ?? msg.isStreaming }
              : msg
          ),
        },
      };
    }),
    
    setIsLoading: (context, isLoading) => set((state) => {
      const chatKey = getChatKey(context);
      return {
        [chatKey]: {
          ...state[chatKey],
          isLoading,
        },
      };
    }),
    
    clearChat: (context) => set(() => {
      const chatKey = getChatKey(context);
      return {
        [chatKey]: createInitialChatState(context),
      };
    }),
  }))
);

// Helper function to get the correct chat state key
function getChatKey(context: ChatContext): keyof Pick<ChatContextStore, "copilotChat" | "outcomesChat" | "leverageLoopsChat"> {
  switch (context) {
    case "copilot":
      return "copilotChat";
    case "outcomes":
      return "outcomesChat";
    case "leverage-loops":
      return "leverageLoopsChat";
  }
}

