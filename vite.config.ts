import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // base: "/awud-telegram-mini-app/",
  build: {
    outDir: "build",
  },
  server: {
    port: 3001,
  },
  preview: {
    port: 3001,
  },
});
