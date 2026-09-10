import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "./src"),
    },
  },
  build: {
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            { name: "react-vendor", test: /node_modules[\\/](react|react-dom|react-router|scheduler)/, priority: 20 },
            { name: "motion", test: /node_modules[\\/](framer-motion|motion|motion-dom|motion-utils|framesync)/, priority: 10 },
          ],
        },
      },
    },
  },
});