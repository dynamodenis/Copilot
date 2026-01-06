# Vite + React Migration Guide

This document describes how to run the migrated Vite + React frontend with Express backend.

## Project Structure

```
Orbiter Copilot/
├── client/                 # Vite + React frontend
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── assets/         # SVG icons and images
│   │   ├── theme.ts        # Theme configuration
│   │   ├── App.tsx         # Main app component
│   │   └── main.tsx        # Entry point
│   ├── package.json
│   └── vite.config.ts
├── server/                 # Express backend
│   ├── src/
│   │   ├── routes/         # API routes
│   │   │   └── chat.ts     # Chat API endpoint
│   │   ├── services/       # Business logic
│   │   │   ├── messageStore.ts
│   │   │   ├── tools.ts
│   │   │   └── tools/      # AI tools (Tavily, weather)
│   │   └── index.ts        # Server entry point
│   └── package.json
└── src/                    # Original Next.js (can be removed after migration)
```

## Setup Instructions

### 1. Install Dependencies

```bash
# Install client dependencies
cd client
npm install --legacy-peer-deps

# Install server dependencies
cd ../server
npm install
```

### 2. Configure Environment Variables

Create a `.env` file in the `server` folder:

```env
THESYS_API_KEY=your_thesys_api_key
TAVILY_API_KEY=your_tavily_api_key
PORT=3001
```

### 3. Run Development Servers

Open two terminal windows:

**Terminal 1 - Backend (Express):**
```bash
cd server
npm run dev
```

**Terminal 2 - Frontend (Vite):**
```bash
cd client
npm run dev
```

The frontend will be available at `http://localhost:5173` and will proxy API requests to `http://localhost:3001`.

## Key Differences from Next.js

| Feature | Next.js | Vite + React |
|---------|---------|--------------|
| Routing | File-based (App Router) | No routing (single page) |
| API Routes | `/api/chat/route.ts` | Express at `server/src/routes/chat.ts` |
| Images | `next/image` | Regular `<img>` tags |
| Environment Variables | `process.env` | `import.meta.env` (prefix with `VITE_`) |
| Server Components | Supported | Not available |

## For Xano Integration

The Express server structure in `/server` follows a clean pattern that you can replicate in Xano:

1. **POST /api/chat** - Main chat endpoint
   - Receives: `{ prompt, threadId, responseId }`
   - Returns: Server-Sent Events stream

2. **Tools**: Located in `server/src/services/tools/`
   - `tavilySearch.ts` - Web search
   - `weather.ts` - Weather data

When migrating to Xano:
1. Create a function stack that mimics the chat route logic
2. Use Xano's external API call feature for OpenAI/Thesys
3. Implement streaming using Xano's response streaming capabilities

## Building for Production

```bash
# Build frontend
cd client
npm run build
# Output in client/dist/

# Build backend
cd ../server
npm run build
# Output in server/dist/
```

## Notes

- The client uses Vite's proxy to forward `/api` requests to the Express server during development
- For production, configure your web server to proxy API requests appropriately
- The Thesys C1 SDK works the same way - just point `apiUrl` to your Xano endpoint

