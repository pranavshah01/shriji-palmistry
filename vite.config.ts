import { defineConfig } from "vite";
import tanstackStart from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    tanstackStart({
      server: {
        entry: "server",
      },
    }),
    react(),
    tailwindcss(),
    tsConfigPaths(),
  ],
  build: {
    rollupOptions: {
      external: ["node:async_hooks", "node:fs", "node:path"],
    },
  },
  ssr: {
    noExternal: ["@tanstack/start-storage-context"],
  },
  define: {
    global: "globalThis",
  },
});
