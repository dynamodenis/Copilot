"use client";

import React from "react";
import { C1Chat } from "@thesysai/genui-sdk";
import "@crayonai/react-ui/styles/index.css";

interface CopilotChatProps {
  apiUrl?: string;
  agentName?: string;
  logoUrl?: string;
}

/**
 * CopilotChat Component
 * 
 * A chatbot interface using Thesys C1 SDK's C1Chat component.
 * This component provides a full conversational UI with Gen UI capabilities.
 * 
 * File Upload Note:
 * C1Chat manages its own input component. To add file upload support:
 * 1. Use the customizeC1 prop to customize the chat input
 * 2. Or implement file upload handling in your backend API
 * 3. Files should be included in message content as per OpenAI format:
 *    - Images: { type: "image_url", image_url: { url: "data:image/..." } }
 *    - Other files: Convert to base64 or upload to file service
 */
export const CopilotChat: React.FC<CopilotChatProps> = ({
  apiUrl = "/api/chat",
  agentName = "Copilot",
  logoUrl,
}) => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <C1Chat
        apiUrl={apiUrl}
        formFactor="full-page"
        agentName={agentName}
        logoUrl={logoUrl}
        disableThemeProvider
      />
    </div>
  );
};
