import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),

    federation({
      name: "host-app",
      remotes: {
        remoteApp: "http://localhost:5001/v1.0.0/remoteEntry.js",
      },
      shared: ["react", "react-dom", "react-redux", "@reduxjs/toolkit"],
    }),
  ],
});

