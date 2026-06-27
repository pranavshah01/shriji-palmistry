import { defineConfig } from "vite";
import tanstackStart from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    tanstackStart({
      server: { entry: "server" },
    }),
    react(),
    tailwindcss(),
    tsConfigPaths(),
  ],
  define: {
    global: "globalThis",
  },
  ssr: {
    noExternal: [],
  },
});
