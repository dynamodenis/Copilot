import { C1Chat } from "@thesysai/genui-sdk";
import "@crayonai/react-ui/styles/index.css";

// Get API URL from environment variable, with fallback for development
const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3001";

interface CopilotChatProps {
  agentName?: string;
  logoUrl?: string;
}

/**
 * CopilotChat Component
 * 
 * A chatbot interface using Thesys C1 SDK's C1Chat component.
 * This component provides a full conversational UI with Gen UI capabilities.
 * 
 * API URL is configured via VITE_API_URL environment variable.
 * - Development: http://localhost:3001 (Express server)
 * - Production: Your Xano API URL
 */
export const CopilotChat: React.FC<CopilotChatProps> = ({
  agentName = "Copilot",
  logoUrl,
}) => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <C1Chat
        apiUrl={`${API_BASE_URL}/api/chat`}
        formFactor="full-page"
        agentName={agentName}
        logoUrl={logoUrl}
        disableThemeProvider
      />
    </div>
  );
};

