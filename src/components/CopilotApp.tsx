import { useState } from "react";
import { CopilotSidebar, SidebarSection } from "./CopilotSidebar";
import { CopilotChat } from "./CopilotChat";
import { OutcomesSection } from "./OutcomesSection";
import { LeverageLoopsSection } from "./LeverageLoopsSection";
import styles from "./CopilotApp.module.scss";

interface CopilotAppProps {
  agentName?: string;
  logoUrl?: string;
}

export const CopilotApp: React.FC<CopilotAppProps> = ({
  agentName = "Copilot",
  logoUrl,
}) => {
  const [activeSection, setActiveSection] = useState<SidebarSection>("copilot");

  const renderContent = () => {
    switch (activeSection) {
      case "copilot":
        return <CopilotChat agentName={agentName} logoUrl={logoUrl} />;
      case "outcomes":
        return <OutcomesSection />;
      case "leverage-loops":
        return <LeverageLoopsSection />;
      default:
        return <CopilotChat agentName={agentName} logoUrl={logoUrl} />;
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
