import type { ActionEvent, PendingAction } from "./types";
import type { ChatContext, ChatMessageType } from "@/react_app/store/chatContextStore";
import { useChatContextStore } from "@/react_app/store/chatContextStore";
import { useLeverageLoopsStore } from "@/react_app/store/leverageLoopsStore";

// Helper to wrap GenUI content
const genUIContent = (component: unknown) => `<content thesys="true">${JSON.stringify({ component, error: null })}</content>`;

// Generate unique IDs
const generateId = () => `msg-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

export interface ActionHandlerDependencies {
  sendMessage: (content: string) => Promise<void>;
  setPendingAction: (action: PendingAction | null) => void;
  setIsModalOpen: (open: boolean) => void;
  context: ChatContext;
  addMessage: (context: ChatContext, message: ChatMessageType, chatKey?: string) => void;
  updateMessage: (context: ChatContext, messageId: string, content: string, isStreaming?: boolean, chatKey?: string) => void;
}

/**
 * Creates an action handler for SectionChat
 */
export const createSectionChatActionHandler = (deps: ActionHandlerDependencies) => {
  const { sendMessage, setPendingAction, setIsModalOpen, context, addMessage, updateMessage } = deps;

  return (event: ActionEvent) => {
    console.log("Action received:", event);

    switch (event.type) {
      case "continue_conversation":
        if (event.params) {
          const { humanFriendlyMessage, llmFriendlyMessage, prompt } = event.params;
          
          // If prompt is provided, send it directly to the LLM
          if (prompt) {
            sendMessage(prompt as string);
          }
          // Otherwise use the modal flow with human/llm friendly messages
          else if (humanFriendlyMessage && llmFriendlyMessage) {
            setPendingAction({
              humanFriendlyMessage: humanFriendlyMessage as string,
              llmFriendlyMessage: llmFriendlyMessage as string,
            });
            setIsModalOpen(true);
          }
        }
        break;

      case "open_url":
        if (event.params?.url) {
          window.open(event.params.url as string, "_blank", "noopener,noreferrer");
        }
        break;

      case "submit_form":
        // Handle form submission - format form data and send to LLM
        if (event.params?.formData) {
          const formData = event.params.formData as Record<string, unknown>;
          const formName = event.params.formName as string || 'form';
          
          // Format form data as a readable message for the LLM
          const formEntries = Object.entries(formData)
            .filter(([_, value]) => value !== undefined && value !== '')
            .map(([key, value]) => `${key.replace(/_/g, ' ')}: ${value}`)
            .join('\n');
          
          const message = `Form submitted: ${formName}\n\n${formEntries}`;
          
          console.log("Sending form data to LLM:", message);
          sendMessage(message);
        }
        break;

      case "add_assistant_message":
        // Add a static assistant message without calling the API
        if (event.params?.content || event.params?.componentData) {
          const messageId = generateId();
          const chatKey = event.params.chatKey as string | undefined;
          
          // Support both raw content string or componentData object
          let content: string;
          if (event.params.componentData) {
            // Wrap component data in thesys content tag
            content = `<content thesys="true">${JSON.stringify(event.params.componentData)}</content>`;
          } else {
            content = event.params.content as string;
          }
          
          addMessage(context, {
            id: messageId,
            role: "assistant",
            content: content,
            timestamp: new Date(),
            isStreaming: false,
          }, chatKey);
        }
        break;

      case "create_suggestion_request":
        if (event.params) {
          const { personName, personTitle, companyName, masterPersonId, chatKey } = event.params;
          const suggestionRequest = {
            request_panel_title: `Suggestion Request for ${personName}`,
            request_header_title: `People to introduce to ${personName}`,
            request_context: `Find people from my network to introduce to ${personName}, who is ${personTitle} at ${companyName}`,
            status: "suggestion" as const,
            user_id: 3,
            copilot_mode: "loop",
            master_person_id: masterPersonId as number,
          };
          
          const loadingMessageId = generateId();
          addMessage(context, {
            id: loadingMessageId,
            role: "assistant",
            content: genUIContent({
              component: "Card",
              props: {
                children: [{
                  component: "TextContent",
                  props: { textMarkdown: `⏳ Creating suggestion request for **${personName}**...` }
                }]
              }
            }),
            timestamp: new Date(),
            isStreaming: false,
          }, chatKey as string | undefined);
          
          useLeverageLoopsStore.getState().createSuggestionRequest(suggestionRequest).then(() => {
            const { createSuggestionRequestError } = useLeverageLoopsStore.getState();
            const content = createSuggestionRequestError
              ? genUIContent({
                  component: "Card",
                  props: {
                    children: [{
                      component: "TextContent",
                      props: { textMarkdown: `❌ Failed: ${createSuggestionRequestError}` }
                    }]
                  }
                })
              : genUIContent({
                  component: "Card",
                  props: {
                    children: [
                      {
                        component: "Header",
                        props: { title: "✅ Suggestion Request Created", subtitle: `For ${personName}` }
                      },
                      {
                        component: "TextContent",
                        props: { textMarkdown: "Your suggestion request has been created successfully! You can view it in the sidebar under Leverage Loops." }
                      }
                    ]
                  }
                });
            updateMessage(context, loadingMessageId, content, false, chatKey as string | undefined);
            
            // On success, navigate back to default leverage loop view
            if (!createSuggestionRequestError) {
              const { setSelectedPerson, setSelectedSuggestionRequest } = useChatContextStore.getState();
              setSelectedPerson(null);
              setSelectedSuggestionRequest(null);
            }
          });
        }
        break;

      default:
        console.log("Unhandled action type:", event.type);
    }
  };
};

