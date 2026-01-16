import { defineConfig } from "vite";
// @ts-expect-error: No type definitions for 'veaury/vite/index'
import veauryVitePlugins from "veaury/vite/index";
import { createRoot } from "react-dom/client";
import path from "path";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  envDir: resolve(__dirname, "src/react_app"), // Load .env from react_app directory
  build: {
    cssCodeSplit: false, // Inlines CSS into the JS bundle
    lib: {
      entry: resolve(__dirname, "src/react_app/main.ts"),
      name: "OrbiterCopilot",
      fileName: "orbiter-copilot",
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
        exports: "named",
        inlineDynamicImports: true, // Prevents code splitting
      },
    },
  },
  plugins: [
    veauryVitePlugins({
      type: "vue",
      vueOptions: { customElement: false },
      reactOptions: { createRoot },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      react: path.resolve(__dirname, "node_modules/react"),
      "react-dom": path.resolve(__dirname, "node_modules/react-dom"),
      "tiptap-copilot": path.resolve(__dirname, "src/react_app/main.ts"),
    },
    dedupe: ["react", "react-dom"],
  },
  server: {
    hmr: true,
    watch: {
      usePolling: true, // Helps on some systems (WSL, Docker, network drives)
    },
  },
});
