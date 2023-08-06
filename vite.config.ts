import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/MazeGame/',
  plugins: [react(), vanillaExtractPlugin()],
  build: {
    target: 'es2017',
  },
  resolve: {
    alias: {
      '@': '/src/',
    },
  },
});
