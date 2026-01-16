import React from "react";
import { useShallow } from "zustand/react/shallow";
import { SectionChat } from "./SectionChat";
import { useChatContextStore } from "@/react_app/store/chatContextStore";

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
  } = useChatContextStore(
    useShallow((state) => ({
      selectedPerson: state.selectedPerson,
      selectedSuggestionRequest: state.selectedSuggestionRequest,
    }))
  );

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

  return (
    <SectionChat
      context="leverage-loops"
      title="Leverage Loops"
      subtitle={getSubtitle()}
      systemPrompt={getSystemPrompt()}
    />
  );
};

