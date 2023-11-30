## Install Mudule Federation Plugin

```
  npm install @originjs/vite-plugin-federation --save-dev
```

## Remote App - Expose components

```diff
// Import plugin
+  import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
+    federation({
+      name: "remote-app",
+      filename: "remoteEntry.js",
+      // Modules to expose
+      exposes: {
+        "./Button": "./src/components/Button.jsx",
+      },
+      shared: ["react", "react-dom"],
+    }),
  ],
  build: {
    target: "esnext", // needed to final build
  },
});
```

## Host App - Import remone components

```diff
// Import plugin
+  import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),

+    federation({
+      name: "host-app",
+      remotes: {
+        remoteApp: "http://localhost:5001/assets/remoteEntry.js",
+      },
+      shared: ["react", "react-dom"],
+    }),
  ],
});
```

## Add remote component

```jsx
import MyButton from "remoteApp/Button";

function App() {
  return (
    <div>
      <MyButton />
    </div>
  );
}
```
