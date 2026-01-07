import { useState, useCallback } from "react";
import { C1Chat } from "@thesysai/genui-sdk";
import "@crayonai/react-ui/styles/index.css";
import {
  EditableRadioGroup,
  EditableCheckboxGroup,
  EditMessageModal,
} from "./custom";

// Get API URL from environment variable, with fallback for development
const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3001";

interface CopilotChatProps {
  agentName?: string;
  logoUrl?: string;
}

interface PendingAction {
  humanFriendlyMessage: string;
  llmFriendlyMessage: string;
}

// Action event type from C1
interface C1ActionEvent {
  type?: string;
  params?: Record<string, unknown>;
}

/**
 * CopilotChat Component
 *
 * A chatbot interface using Thesys C1 SDK's C1Chat component.
 * This component provides a full conversational UI with Gen UI capabilities.
 *
 * Custom components (EditableRadioGroup, EditableCheckboxGroup) are registered
 * to allow users to edit their selections before submitting.
 *
 * API URL is configured via VITE_API_URL environment variable.
 * - Development: http://localhost:3001 (Express server)
 * - Production: Your Xano API URL
 */
export const CopilotChat: React.FC<CopilotChatProps> = ({
  agentName = "Copilot",
  logoUrl,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pendingAction, setPendingAction] = useState<PendingAction | null>(null);

  /**
   * Handle actions from custom components
   * When a user selects a radio/checkbox option, we intercept the action
   * and show a modal for editing before sending to the API
   *
   * Note: For C1Chat, onAction is primarily for custom actions.
   * Built-in actions like 'continue_conversation' are handled automatically.
   * Custom components using useOnAction trigger 'continue_conversation'.
   */
  const handleAction = useCallback((event: C1ActionEvent) => {
    console.log("Action received:", event);

    // Check if this is from our custom components
    if (event.type === "continue_conversation" && event.params) {
      const humanFriendlyMessage = event.params.humanFriendlyMessage as string;
      const llmFriendlyMessage = event.params.llmFriendlyMessage as string;

      if (humanFriendlyMessage && llmFriendlyMessage) {
        // Show the edit modal instead of auto-submitting
        setPendingAction({
          humanFriendlyMessage,
          llmFriendlyMessage,
        });
        setIsModalOpen(true);
      }
    }
  }, []);

  /**
   * Handle modal confirmation - send the edited message
   * We use the browser's custom event to communicate with C1Chat's internal composer
   */
  const handleModalConfirm = useCallback((editedMessage: string) => {
    if (editedMessage.trim()) {
      // Dispatch a custom event that could be picked up by other components
      // Or simply close the modal and let the user paste/type the message
      // For now, we'll log it and the user can copy it
      console.log("Sending message:", editedMessage);

      // Find the composer input and set its value
      const composerInput = document.querySelector(
        '.crayon-shell-composer-input'
      ) as HTMLTextAreaElement;

      if (composerInput) {
        // Set the value
        composerInput.value = editedMessage;
        // Trigger input event to update React state
        const inputEvent = new Event('input', { bubbles: true });
        composerInput.dispatchEvent(inputEvent);
        // Focus the input
        composerInput.focus();
      }
    }
    setPendingAction(null);
    setIsModalOpen(false);
  }, []);

  /**
   * Handle modal cancel
   */
  const handleModalClose = useCallback(() => {
    setPendingAction(null);
    setIsModalOpen(false);
  }, []);

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <C1Chat
        apiUrl={`${API_BASE_URL}/api/chat`}
        formFactor="full-page"
        agentName={agentName}
        logoUrl={logoUrl}
        disableThemeProvider
        customizeC1={{
          customComponents: {
            EditableRadioGroup,
            EditableCheckboxGroup,
          },
        }}
        onAction={handleAction}
      />

      {/* Edit Message Modal */}
      {pendingAction && (
        <EditMessageModal
          isOpen={isModalOpen}
          onClose={handleModalClose}
          humanFriendlyMessage={pendingAction.humanFriendlyMessage}
          llmFriendlyMessage={pendingAction.llmFriendlyMessage}
          onConfirm={handleModalConfirm}
        />
      )}
    </div>
  );
};
