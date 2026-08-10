import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    target: 'esnext',
    outDir: 'dist-app',
    sourcemap: true,
    minify: true,
    cssMinify: 'lightningcss',
  },
  resolve: {
    alias: {
      '@': resolve(import.meta.dirname, './src'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/setup.ts',
    coverage: {
      provider: 'v8',
      include: ['src/**'],
      exclude: ['src/Main.tsx', 'src/env.d.ts', 'src/types/**', 'src/assets/**'],
      reporter: ['text', 'json', 'html'],
    },
  },
  define: {
    __APP_ENV__: JSON.stringify(process.env.VITE_VERCEL_ENV || 'development'),
  },
});
