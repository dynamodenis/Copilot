import { ThemeProvider } from "@thesysai/genui-sdk";
import { darkTheme, theme, themeMode } from "../theme";

export default function CopilotApp() {
  return (
    <ThemeProvider theme={theme} darkTheme={darkTheme} mode={themeMode}>
      CopilotApp
    </ThemeProvider>
  );
}
