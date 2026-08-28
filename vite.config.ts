import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  base: '/my-first-app-chinese-medical/',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, '.'),
    },
  },
  server: {
    watch: process.env.DISABLE_HMR === 'true' ? null : {},
  },
});
