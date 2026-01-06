import { CopilotApp } from './components/CopilotApp'
import OrbiterLogo from "@/assets/sidebar/Orbiter logo.svg";


function App() {
  return <CopilotApp apiUrl="/api/chat" agentName="Copilot" logoUrl={OrbiterLogo} />
}

export default App

