# Orbiter.io Copilot

A React + Vite client-side application for the Orbiter.io Copilot AI assistant, powered by Thesys C1 SDK.

## Project Structure

```
├── src/
│   ├── components/           # React components
│   │   ├── CopilotApp.tsx    # Main app wrapper with sidebar
│   │   ├── CopilotChat.tsx   # C1Chat integration
│   │   ├── CopilotSidebar.tsx # Navigation sidebar
│   │   ├── OutcomesSection.tsx
│   │   └── LeverageLoopsSection.tsx
│   ├── assets/
│   │   └── sidebar/          # SVG icons
│   ├── theme.ts              # Theme configuration
│   ├── App.tsx               # App entry
│   └── main.tsx              # React root
├── public/                   # Static assets
├── package.json
├── vite.config.ts
└── tsconfig.json
```

## Quick Start

### 1. Install Dependencies

```bash
npm install --legacy-peer-deps
```

### 2. Configure Environment

Create a `.env` file in the project root:

```env
# API Configuration
# Development: Use your local Express server
VITE_API_URL=http://localhost:3001

# Production: Replace with your Xano API URL
# VITE_API_URL=https://your-xano-api.com
```

### 3. Run Development Server

```bash
npm run dev
```

Visit `http://localhost:5173`

## Backend Setup

This client calls an external API. You have two options:

### Option A: Use the Express Server (for development)

See the separate `server/` repository or create your own Express server with the following endpoint:

```typescript
// POST /api/chat
// Uses Thesys C1 SDK for AI responses
```

Required environment variables for the server:
```env
THESYS_API_KEY=your_thesys_api_key
TAVILY_API_KEY=your_tavily_api_key
PORT=3001
```

### Option B: Use Xano (for production)

Set `VITE_API_URL` to your Xano API endpoint in `.env`.

## Features

- 🤖 AI Chat powered by Thesys C1 with Generative UI
- 🔍 Web search via Tavily API
- 🌤️ Weather tool integration
- 🎨 Dark theme with custom styling
- 📱 Responsive design for all screen sizes
- 🎯 Multi-section sidebar (Copilot, Outcomes, Leverage Loops)

## Tech Stack

- **Framework:** React 19, Vite, TypeScript
- **Styling:** SCSS Modules, CSS Variables
- **AI SDK:** @thesysai/genui-sdk, @crayonai/react-ui
- **State:** Zustand (peer dependency)

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `VITE_API_URL` | Backend API base URL | `http://localhost:3001` |

## Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## License

Private
