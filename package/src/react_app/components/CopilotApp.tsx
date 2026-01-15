import { useState } from "react";
import { useShallow } from "zustand/react/shallow";
import { CopilotSidebar, type SidebarSection } from "./CopilotSidebar";
import { CopilotMainChat, OutcomesChat, LeverageLoopChat } from "./chat";
import { useChatContextStore } from "@/react_app/store/chatContextStore";
import styles from "./CopilotApp.module.scss";
import "../index.css";

interface CopilotAppProps {
  agentName?: string;
  logoUrl?: string;
  token?: string;
  dataSource?: string;
  baseUrl?: string;
}

export const CopilotApp: React.FC<CopilotAppProps> = ({
  agentName = "Copilot",
  token: _token,
  dataSource: _dataSource,
  baseUrl: _baseUrl,
}) => {
  const [activeSection, setActiveSection] = useState<SidebarSection>("copilot");

  const { setSelectedPerson, setSelectedSuggestionRequest } = useChatContextStore(
    useShallow((state) => ({
      setSelectedPerson: state.setSelectedPerson,
      setSelectedSuggestionRequest: state.setSelectedSuggestionRequest,
    }))
  );

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
