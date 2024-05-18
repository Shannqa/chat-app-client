import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { API_URL } from "./src/api";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "https://pyrite-inexpensive-saltasaurus.glitch.me",
        changeOrigin: true,
        secure: false,
      },
    },
  },
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./tests/setup.js",
  },
});
