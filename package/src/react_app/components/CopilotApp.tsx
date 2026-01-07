// import "./copilot.scss";
// export default function CopilotApp() {
//   return <h1 className="copilot-heading">Hello copilot</h1>;
// }

import { ThemeProvider } from "@thesysai/genui-sdk";
import "@crayonai/react-ui/styles/index.css";

export default function CopilotApp() {
  return (
    <ThemeProvider>
      <h1>Hello copilot</h1>
    </ThemeProvider>
  );
}
