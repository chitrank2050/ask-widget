import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '') // no `VITE_` prefix filter

  return {
    plugins: [
      react(),
      dts({
        tsconfigPath: './tsconfig.app.json',
        include: ['src'],
        insertTypesEntry: true,
      }),
    ],
    server: {
      port: env.APP_PORT ? Number(env.APP_PORT) : 5173,
      host: env.APP_HOST || '127.0.0.1',
    },
    build: {
      lib: {
        entry: resolve(__dirname, 'src/index.ts'),
        name: 'AskWidget',
        fileName: (format) => `ask-widget.${format}.js`,
        formats: ['es', 'umd'],
      },
      target: 'esnext',
      rollupOptions: {
        // React is a peer dep — never bundle it
        external: ['react', 'react-dom'],
        output: {
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
          },
          // Keep CSS separate so consumer imports it explicitly
          assetFileNames: 'style.css',
        },
      },
      sourcemap: true,
      // Minify for production
      // minify: 'esbuild',
      minify: false,
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
      },
    },
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './tests/setup.ts',
      coverage: {
        provider: 'v8',
        reporter: ['text', 'lcov'],
        include: ['src/**/*.{ts,tsx}'],
        exclude: ['src/index.ts'],
      },
    },
  }
})
