import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./node_modules//normalize.css/normalize";
                         @import "./src/scss/_mixins";
                         @import "./src/scss/_variables";`,
      },
    },
  },
});
