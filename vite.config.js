import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import svgLoader from 'vite-svg-loader';
import * as path from 'path';

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

  plugins: [vue(), svgLoader()],
});
