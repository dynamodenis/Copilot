import React from "react";
import { SectionChat } from "./SectionChat";

/**
 * OutcomesChat Component
 *
 * Chat interface for Outcomes section.
 * Has its own independent state from other sections.
 */
export const OutcomesChat: React.FC = () => {
  return (
    <SectionChat
      context="outcomes"
      title="Outcomes"
      systemPrompt="You are helping the user track and achieve their professional outcomes and goals."
    />
  );
};

