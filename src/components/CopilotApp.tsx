import { useState } from "react";
import { ThemeProvider } from "@thesysai/genui-sdk";
import { CopilotSidebar, SidebarSection } from "./CopilotSidebar";
import { CopilotChat } from "./CopilotChat";
import { OutcomesSection } from "./OutcomesSection";
import { LeverageLoopsSection } from "./LeverageLoopsSection";
import { theme, darkTheme, themeMode } from "@/theme";
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
      <ThemeProvider theme={theme} darkTheme={darkTheme} mode={themeMode as "light" | "dark"}>
        <CopilotSidebar
          activeSection={activeSection}
          onSectionChange={setActiveSection}
        />
        <main className={styles.mainContent}>{renderContent()}</main>
      </ThemeProvider>
    </div>
  );
};

