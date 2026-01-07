import { C1Component } from "@thesysai/genui-sdk";
import "@crayonai/react-ui/styles/index.css";
import { useEffect, useState } from "react";

export default function CopilotApp() {
  const [response, setResponse] = useState<string>("");

  useEffect(() => {
    const fetchResponse = async () => {
      const response = await fetch("/chat");
      const text = await response.text();
      setResponse(text);
    };
    fetchResponse();
  }, []);

  return <C1Component c1Response={response} isStreaming={false} />;
}
