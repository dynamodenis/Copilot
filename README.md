# Orbiter.io Copilot

A React + Vite frontend with Express backend for the Orbiter.io Copilot AI assistant, powered by Thesys C1 SDK.

## Project Structure

```
├── client/                 # Vite + React frontend
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── assets/         # SVG icons
│   │   ├── theme.ts        # Theme configuration
│   │   └── App.tsx         # Main app
│   ├── package.json
│   └── vite.config.ts
│
├── server/                 # Express backend
│   ├── src/
│   │   ├── routes/         # API routes
│   │   ├── services/       # Business logic & tools
│   │   └── index.ts        # Server entry
│   └── package.json
│
└── VITE_MIGRATION.md       # Detailed setup guide
```

## Quick Start

### 1. Install Dependencies

```bash
# Client
cd client
npm install --legacy-peer-deps

# Server
cd ../server
npm install
```

### 2. Configure Environment

Create `server/.env`:

```env
THESYS_API_KEY=your_thesys_api_key
TAVILY_API_KEY=your_tavily_api_key
PORT=3001
```

### 3. Run Development

**Terminal 1 - Server:**
```bash
cd server
npm run dev
```

**Terminal 2 - Client:**
```bash
cd client
npm run dev
```

Visit `http://localhost:5173`

## Features

- 🤖 AI Chat powered by Thesys C1 with Generative UI
- 🔍 Web search via Tavily
- 🌤️ Weather tool integration
- 🎨 Dark theme with custom styling
- 📱 Responsive design

## Tech Stack

- **Frontend:** React 19, Vite, TypeScript, SCSS
- **Backend:** Express, TypeScript
- **AI:** Thesys C1 SDK, Tavily Search
- **UI:** @thesysai/genui-sdk, @crayonai/react-ui

## License

Private
