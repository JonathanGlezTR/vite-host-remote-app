import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "remote-app", // name of the fed group...
      filename: "remoteEntry.js", // default file name
      // Modules to expose
      exposes: {
        "./Button": "./src/components/Button.jsx",
        "./RemoteContainer": "./src/RemoteContainer.jsx",
        "./RemoteContext": "./src/RemoteContext.jsx",
        "./RemoteCounterSlice": "./src/store/counterslice.js",
        "./RemoteReduxCounter": "./src/RemoteReduxCounter.jsx",
      },
      shared: {
        react: {},
        "react-dom": {},
        "react-redux": { requiredVersion: "9.0.1" },
        "@reduxjs/toolkit": { requiredVersion: "2.0.1" },
      }, // libs/deps to be shared
    }),
  ],
  build: {
    target: "esnext", // needed to final build
    assetsDir: `v${process.env.npm_package_version}`,
  },
});

