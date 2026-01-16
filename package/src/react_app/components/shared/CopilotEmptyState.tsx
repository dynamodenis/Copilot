import React from "react";
import { useShallow } from "zustand/react/shallow";
import { useVariablesStore } from "@/react_app/store/variablesStore";
import orbiterLogo from "@/react_app/assets/sidebar/Orbiter logo.svg";
import styles from "../CopilotChat.module.scss";

interface CopilotEmptyStateProps {
  greeting?: string;
  subtext?: string;
}

/**
 * CopilotEmptyState Component
 * 
 * Welcome screen with logo, greeting, and subtext message.
 * Used for Copilot and Leverage Loops empty states.
 */
export const CopilotEmptyState: React.FC<CopilotEmptyStateProps> = ({ 
  greeting,
  subtext,
}) => {
  const { user_name } = useVariablesStore(
    useShallow((state) => ({
      user_name: state.user_name,
    }))
  );

  // Generate a cheeky message based on time of day
  const getCheekyMessage = () => {
    const hour = new Date().getHours();
    if (hour < 12) {
      return "Ready to make today legendary?";
    } else if (hour < 18) {
      return "Afternoon power move—let's go!";
    } else {
      return "Still crushing it? I like your style.";
    }
  };

  const displayName = user_name || "there";
  const displayGreeting = greeting || `Ready to make magic today, ${displayName}`;
  const displaySubtext = subtext || getCheekyMessage();

  return (
    <div className={styles.copilotEmptyState}>
      <img src={orbiterLogo} alt="Orbiter Logo" className={styles.logo} />
      <div className={styles.welcomeMessage}>
        <h2 className={styles.welcomeGreeting}>
          {displayGreeting}
        </h2>
        <p className={styles.welcomeSubtext}>
          {displaySubtext}
        </p>
      </div>
    </div>
  );
};

