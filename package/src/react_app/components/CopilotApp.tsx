import { C1Component, ThemeProvider } from "@thesysai/genui-sdk";
import "@crayonai/react-ui/styles/index.css";
import { useEffect, useState } from "react";

export default function CopilotApp() {
  const [c1Response, setC1Response] = useState<string>("");

  useEffect(() => {
    const fetchResponse = async () => {
      const response = await fetch("/chat");
      const text = await response.text();
      setC1Response(text);
    };
    fetchResponse();
  }, []);

  return (
    <ThemeProvider>
      <C1Component c1Response={c1Response} isStreaming={false} />
    </ThemeProvider>
  );
}
