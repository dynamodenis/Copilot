import React from "react";
import { SectionChat } from "./SectionChat";

interface CopilotMainChatProps {
  agentName?: string;
}

/**
 * CopilotMainChat Component
 *
 * Main Orbiter Copilot chat interface.
 * Has its own independent state from other sections.
 */
export const CopilotMainChat: React.FC<CopilotMainChatProps> = ({
  agentName = "Orbiter.io Copilot",
}) => {
  return (
    <SectionChat
      context="copilot"
      title={agentName}
      systemPrompt="You are Orbiter.io Copilot, a helpful AI assistant for professional networking and relationship management."
    />
  );
};

