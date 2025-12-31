# Copilot Implementation Guide

This document describes the component-based Copilot implementation using React, TypeScript, and Thesys C1 SDK.

## Overview

The implementation provides a copilot chatbot interface with:
- Sidebar navigation with 3 sections (Copilot, Outcomes, Leverage Loops)
- Integrated C1Chat component using Thesys C1 SDK with Gen UI support
- Component-based architecture suitable for WeWeb integration
- File upload support documentation (images, documents, audio)

## Component Structure

```
src/components/
├── CopilotApp.tsx              # Main application component
├── CopilotSidebar.tsx          # Sidebar navigation component
├── CopilotChat.tsx             # Chat interface using C1Chat
├── CopilotChatWithUpload.tsx   # Extended version with file upload UI
├── OutcomesSection.tsx         # Outcomes section placeholder
├── LeverageLoopsSection.tsx    # Leverage Loops section placeholder
├── index.ts                    # Component exports
└── *.module.scss               # Component styles
```

## Usage

### Basic Usage

```tsx
import { CopilotApp } from "@/components/CopilotApp";

export default function Home() {
  return (
    <CopilotApp 
      apiUrl="/api/chat"
      agentName="Copilot"
      logoUrl="/path/to/logo.png"
    />
  );
}
```

### Individual Components

```tsx
import { 
  CopilotApp,
  CopilotSidebar,
  CopilotChat,
  OutcomesSection,
  LeverageLoopsSection 
} from "@/components";
```

## Features

### 1. Sidebar Navigation

The sidebar includes three main sections:
- **Copilot**: Chatbot interface with Gen UI
- **Outcomes**: Placeholder for outcomes management
- **Leverage Loops**: Placeholder for leverage loops

### 2. C1Chat Integration

The Copilot section uses `C1Chat` from `@thesysai/genui-sdk`, which provides:
- Full conversational UI (message list, composer, avatars)
- Generative UI rendering (forms, charts, interactive components)
- Streaming support
- Thread management
- Built-in theming

### 3. File Upload Support

**Current Status**: C1Chat manages its own input component. File upload UI is partially implemented in `CopilotChatWithUpload.tsx`, but full integration requires:

1. **Customizing C1Chat Input**: Use the `customizeC1` prop if available
2. **Backend Integration**: Handle file uploads in your API route
3. **Message Format**: Follow OpenAI message format for file attachments

#### File Upload Message Format

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

// Document or audio
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

#### Utility Functions

File utility functions are available in `src/utils/fileUtils.ts`:
- `fileToBase64()`: Convert file to base64 string
- `getFileType()`: Determine file type from MIME type
- `fileToMessageContent()`: Convert file to OpenAI message format
- `filesToMessageContent()`: Convert multiple files to message content

## API Integration

The API route at `/api/chat/route.ts` already supports:
- Message content as strings or arrays (for file attachments)
- Streaming responses
- Tool calling
- Thread management

To add file upload support to the API:

1. Accept file data in the request (base64 or file upload)
2. Convert files to the appropriate message content format
3. Include file content in the message sent to Thesys C1 API

Example API modification:

```typescript
// In route.ts, handle file attachments
const { prompt, threadId, responseId, attachments } = await req.json();

// Convert attachments to message content
const content = [
  { type: "text", text: prompt.content },
  ...(await Promise.all(attachments.map(fileToMessageContent)))
];

messageStore.addMessage({
  role: "user",
  content: content,
  id: prompt.id
});
```

## WeWeb Integration

All components are designed to be self-contained and can be imported into WeWeb:

1. Copy the `src/components` directory to your WeWeb project
2. Ensure dependencies are installed:
   - `@thesysai/genui-sdk`
   - `@crayonai/react-ui`
3. Import and use the `CopilotApp` component

```tsx
// In WeWeb component
import { CopilotApp } from "./components/CopilotApp";

export default function MyCopilotPage() {
  return (
    <CopilotApp 
      apiUrl="/api/chat"
      agentName="My Copilot"
    />
  );
}
```

## Styling

Components use SCSS modules for styling. The main theme is defined in `src/theme.ts` and applied via `ThemeProvider` from Thesys C1 SDK.

### Customization

To customize the appearance:
1. Modify theme in `src/theme.ts`
2. Override component styles in `*.module.scss` files
3. Use CSS overrides for C1Chat components (see Thesys documentation)

## Next Steps

1. **Full File Upload Integration**: 
   - Check C1Chat's `customizeC1` prop for input customization
   - Implement file upload handling in the API route
   - Add file preview and management UI

2. **Outcomes Section**: 
   - Implement outcomes management functionality
   - Connect to your data backend

3. **Leverage Loops Section**: 
   - Implement leverage loops functionality
   - Add workflow management features

4. **Persistence**: 
   - Implement thread persistence (see Thesys documentation)
   - Add database integration for conversation history

## Resources

- [Thesys C1 Documentation](https://docs.thesys.dev)
- [C1Chat Component Reference](https://docs.thesys.dev/guides/conversational)
- [Gen UI Guide](https://docs.thesys.dev/guides/rendering-ui)
- [File Upload Examples](https://docs.thesys.dev/examples)

## Notes

- The current implementation uses in-memory message storage. For production, implement persistent storage.
- File uploads are documented but require additional integration with C1Chat's input component.
- Outcomes and Leverage Loops sections are placeholders and need full implementation.
