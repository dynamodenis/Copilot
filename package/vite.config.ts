import { defineConfig } from "vite";
import path from "path";
// @ts-expect-error: No type definitions for 'veaury/vite/index'
import veauryVitePlugins from "veaury/vite/index";
import { createRoot } from "react-dom/client";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/react_app/main.ts"),
      name: "OrbiterTiptap",
      fileName: "orbiter-tiptap",
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
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
    },
  },
});
