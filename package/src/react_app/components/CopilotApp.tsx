import { useState, useLayoutEffect } from "react";
import { useShallow } from "zustand/react/shallow";
import { CopilotSidebar, type SidebarSection } from "./CopilotSidebar";
import { CopilotMainChat, OutcomesChat, LeverageLoopChat } from "./chat";
import { useChatContextStore } from "@/react_app/store/chatContextStore";
import { useVariablesStore } from "@/react_app/store/variablesStore";
import styles from "./CopilotApp.module.scss";
import "../index.css";

interface CopilotAppProps {
  agentName?: string;
  logoUrl?: string;
  token?: string;
  dataSource?: string;
  baseUrl?: string;
  user_id:number
  copilot_llm_endpoint:string
  user_name:string
}

export const CopilotApp: React.FC<CopilotAppProps> = ({
  agentName = "Copilot",
  token,
  dataSource,
  baseUrl,
  user_id,
  copilot_llm_endpoint,
  user_name,
}) => {
  const [activeSection, setActiveSection] = useState<SidebarSection>("copilot");
  // Zustand setters are stable references, so we don't need useShallow or to include in deps
  const setVariables = useVariablesStore((state) => state.setVariables);

  const { setSelectedPerson, setSelectedSuggestionRequest } = useChatContextStore(
    useShallow((state) => ({
      setSelectedPerson: state.setSelectedPerson,
      setSelectedSuggestionRequest: state.setSelectedSuggestionRequest,
    }))
  );

  // Store the variables synchronously before paint to ensure they're available for child components
  // Note: setVariables is a stable reference from Zustand, so we don't need it in deps
  useLayoutEffect(() => {
    setVariables({ token, baseUrl, dataSource, user_id, copilot_llm_endpoint, user_name });
    console.log("setVariables", token, baseUrl, dataSource, user_id, copilot_llm_endpoint);
  }, [token, baseUrl, dataSource, user_id, copilot_llm_endpoint, user_name]);

  // When you click on a section in the sidebar, you need to reset the copilot chat section contents
  const handleSectionChangeConfiguration = (section: SidebarSection) => {
    setActiveSection(section);
    // When you select a section eg "leverage-loops", you need to reset the selected person and suggestion request
    if (section === "leverage-loops") {
      setSelectedPerson(null);
      setSelectedSuggestionRequest(null);
    }
  };

  const renderContent = () => {
    switch (activeSection) {
      case "copilot":
        return <CopilotMainChat agentName={agentName} />;
      case "outcomes":
        return <OutcomesChat />;
      case "leverage-loops":
        return <LeverageLoopChat />;
      default:
        return <CopilotMainChat agentName={agentName} />;
    }
  };

  return (
    <div className={styles.app}>
      <CopilotSidebar
        activeSection={activeSection}
        onSectionChange={setActiveSection}
        onSectionChangeConfiguration={handleSectionChangeConfiguration}
      />
      <main className={styles.mainContent}>{renderContent()}</main>
    </div>
  );
};

export default CopilotApp;
