"use client";

import { CopilotApp } from "@/components/CopilotApp";

export default function Home() {
  return (
    <div style={{ width: "100%", height: "100vh", overflow: "hidden" }}>
      <CopilotApp agentName="Copilot" />
    </div>
  );
}
