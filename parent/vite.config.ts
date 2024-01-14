import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import federation from "@originjs/vite-plugin-federation";

export default ({ mode }) => {
  // Add env vars from .env to process.env
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    plugins: [
      react(),
      federation({
        name: "parent",
        remotes: {
          mfe1: process.env.VITE_MFE1_URL + "/assets/remoteEntry.js",
        },
        shared: ["react", "react-dom", "react-router-dom"],
      }),
    ],
    server: {
      open: true,
      port: 5000,
    },
    build: {
      target: "esnext",
    },
  });
};
