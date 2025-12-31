# Copilot Components

This directory contains the component-based structure for the Copilot application that can be integrated into WeWeb.

## Components

### CopilotApp
Main application component that includes the sidebar and content area.

**Usage:**
```tsx
import { CopilotApp } from "@/components/CopilotApp";

<CopilotApp 
  apiUrl="/api/chat"
  agentName="Copilot"
  logoUrl="/path/to/logo.png"
/>
```

### CopilotSidebar
Sidebar navigation component with three sections:
- Copilot (chatbot interface)
- Outcomes
- Leverage Loops

### CopilotChat
Chatbot interface using Thesys C1 SDK's C1Chat component with Gen UI support.

### CopilotChatWithUpload
Extended version with file upload UI (images, documents, audio).

**Note:** C1Chat manages its own input component. To fully integrate file uploads:
1. Use the `customizeC1` prop if available in C1Chat
2. Or handle file uploads in your backend API
3. Files should be included in message content per OpenAI format

### OutcomesSection & LeverageLoopsSection
Placeholder components for the Outcomes and Leverage Loops sections.

## File Upload Integration

### Message Format

The API accepts messages in OpenAI format. For file attachments, include them in the content array:

```typescript
// Image attachment
{
  role: "user",
  content: [
    { type: "text", text: "Look at this image" },
    { 
      type: "image_url", 
      image_url: { url: "data:image/png;base64,..." } 
    }
  ]
}

// Document or audio (convert to base64 or upload to service)
{
  role: "user",
  content: [
    { type: "text", text: "Here's a document" },
    { 
      type: "text", 
      text: `[File: document.pdf] Data URL: data:application/pdf;base64,...` 
    }
  ]
}
```

### Backend Support

The current API route (`/api/chat/route.ts`) already supports message content as arrays. Ensure your backend:
1. Accepts `content` as either string or array
2. Processes file data (base64 or URLs)
3. Passes it to the Thesys C1 API

## WeWeb Integration

All components are designed to be self-contained and can be imported into WeWeb:

```tsx
// In WeWeb
import { CopilotApp } from "./components/CopilotApp";

export default function MyPage() {
  return <CopilotApp apiUrl="/api/chat" agentName="My Copilot" />;
}
```
