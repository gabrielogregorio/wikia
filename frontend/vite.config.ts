import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  root: '.',
  base: '',
  build: {
    outDir: 'build',
  },
  resolve: {
    alias: {
      '@/api': resolve(__dirname, './src/core/api'),
      '@/hooks': resolve(__dirname, './src/core/hooks'),
      '@/libs': resolve(__dirname, './src/libs'),
      '@/services': resolve(__dirname, './src/core/services'),
      '@/pages': resolve(__dirname, './src/pages'),
    },
  },
  // @ts-ignore
  test: {
    css: false,
    coverage: {
      reporter: ['text', 'json', 'html', 'lcov'],
    },
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./tests/setup.ts'],
  },
  plugins: [react()],
});
