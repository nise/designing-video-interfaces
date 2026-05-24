import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  base: '/designing-video-interfaces/',
  server: {
    port: 5173,
  },
});
