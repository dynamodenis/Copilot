import React, { useEffect } from "react";
import { useShallow } from "zustand/react/shallow";
import { SectionChat } from "./SectionChat";
import { useChatContextStore } from "@/react_app/store/chatContextStore";
import { generateId } from "./SectionChat";
import { type ChatMessageType } from "@/react_app/store/chatContextStore";
/**
 * LeverageLoopChat Component
 *
 * Chat interface for Leverage Loops section.
 * Shows context about the selected person or suggestion request.
 */
export const LeverageLoopChat: React.FC = () => {
  const { 
    selectedPerson, 
    selectedSuggestionRequest,
    leverageLoopChats,
    addMessage,
  } = useChatContextStore(
    useShallow((state) => ({
      selectedPerson: state.selectedPerson,
      selectedSuggestionRequest: state.selectedSuggestionRequest,
      leverageLoopChats: state.leverageLoopChats,
      addMessage: state.addMessage,
    }))
  );
  useEffect(() => {
    // Check if this person's chat already has an initial assistant message
    const chatKey = "leverage-loop-default";
    const existingChat = leverageLoopChats[chatKey];
    const hasInitialMessage = existingChat?.messages?.[0]?.role === "assistant";

    // Only add the initial message if it doesn't already exist
    if (!hasInitialMessage) {
      const context = "leverage-loops";
      const responseId = generateId();

      // Wrap in thesys content tag
      // const content = `<content thesys="true">${JSON.stringify(leverageLoopInitialSectionContentPrompt(item))}</content>`;

      const assistantMessage: ChatMessageType = {
        id: responseId,
        role: "assistant",
        content: "Select a person from your contacts to assist with your network.",
        timestamp: new Date(),
        isStreaming: false,
      };

      addMessage(context, assistantMessage, chatKey);
    }
  }, [selectedPerson, selectedSuggestionRequest]);

  // Build context-aware system prompt
  const getSystemPrompt = () => {
    if (selectedPerson) {
      return `You are helping with a leverage loop for ${selectedPerson.full_name} from ${selectedPerson.master_person?.master_company?.company_name || "Unknown Company"}. Their title is ${selectedPerson.master_person?.current_title || "Unknown"}.`;
    }
    if (selectedSuggestionRequest) {
      return `You are helping with the leverage loop suggestion request: "${selectedSuggestionRequest.request_header_title}". Context: ${selectedSuggestionRequest.request_context}`;
    }
    return "You are helping the user manage their leverage loops and professional network.";
  };

  // Build subtitle based on selection
  const getSubtitle = () => {
    if (selectedPerson) {
      return `${selectedPerson.full_name} • ${selectedPerson.master_person?.master_company?.company_name || ""}`;
    }
    if (selectedSuggestionRequest) {
      return selectedSuggestionRequest.request_header_title;
    }
    return undefined;
  };

  const showComposer = !!(selectedPerson || selectedSuggestionRequest);

  return (
    <SectionChat
      context="leverage-loops"
      title="Leverage Loops"
      subtitle={getSubtitle()}
      systemPrompt={getSystemPrompt()}
      showComposer={showComposer}
    />
  );
};

