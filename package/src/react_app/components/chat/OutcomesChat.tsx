import React,{useEffect} from "react";
import { SectionChat } from "./SectionChat";
import { generateId } from "./SectionChat";
import { useChatContextStore } from "@/react_app/store/chatContextStore";
import { useShallow } from "zustand/react/shallow";
import { type ChatMessageType } from "@/react_app/store/chatContextStore";
/**
 * OutcomesChat Component
 *
 * Chat interface for Outcomes section.
 * Has its own independent state from other sections.
 */
export const OutcomesChat: React.FC = () => {

  const { 
    selectedSuggestionRequest,
    outcomesChats,
    addMessage,
  } = useChatContextStore(
    useShallow((state) => ({
      selectedSuggestionRequest: state.selectedSuggestionRequest,
      outcomesChats: state.outcomesChats,
      addMessage: state.addMessage,
    }))
  );
  useEffect(() => {
    // Check if this person's chat already has an initial assistant message
    const chatKey = "outcomes-default";
    const existingChat = outcomesChats[chatKey];
    const hasInitialMessage = existingChat?.messages?.[0]?.role === "assistant";

    // Only add the initial message if it doesn't already exist
    if (!hasInitialMessage) {
      const context = "outcomes";
      const responseId = generateId();

      // Wrap in thesys content tag
      // const content = `<content thesys="true">${JSON.stringify(leverageLoopInitialSectionContentPrompt(item))}</content>`;

      const assistantMessage: ChatMessageType = {
        id: responseId,
        role: "assistant",
        content: "What would you like to achieve?.",
        timestamp: new Date(),
        isStreaming: false,
      };

      addMessage(context, assistantMessage, chatKey);
    }
  }, [selectedSuggestionRequest]);

  // Build context-aware system prompt
  const getSystemPrompt = () => {
    if (selectedSuggestionRequest) {
      return `You are helping with the outcomes suggestion request: "${selectedSuggestionRequest.request_header_title}". Context: ${selectedSuggestionRequest.request_context}`;
    }
    return "You are helping the user manage their outcomes towards certain goals.";
  };

  return (
    <SectionChat
      context="outcomes"
      title="Outcomes"
      systemPrompt={getSystemPrompt()}
    />
  );
};

