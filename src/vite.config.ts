import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

import type { UserConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  define: {
    "process.env": loadEnv("development", process.cwd()),
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 3001,
  },
  preview: {
    port: 3001,
  },
} as UserConfig);
