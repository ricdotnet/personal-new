import * as path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  publicDir: 'public',

  root: './',
  base: './',

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@layouts': path.resolve(__dirname, './src/layouts'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@components': path.resolve(__dirname, './src/components'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
    }
  },

  plugins: [vue()],
});
