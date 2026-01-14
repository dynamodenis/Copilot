import { useState } from "react";
import { CopilotSidebar, type SidebarSection } from "./CopilotSidebar";
import { CopilotMainChat, OutcomesChat, LeverageLoopChat } from "./chat";
import styles from "./CopilotApp.module.scss";
import "../index.css";

interface CopilotAppProps {
  agentName?: string;
  logoUrl?: string;
}

export const CopilotApp: React.FC<CopilotAppProps> = ({
  agentName = "Copilot",
}) => {
  const [activeSection, setActiveSection] = useState<SidebarSection>("copilot");

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
      />
      <main className={styles.mainContent}>{renderContent()}</main>
    </div>
  );
};

export default CopilotApp;
