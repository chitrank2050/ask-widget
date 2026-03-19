import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '') // no `VITE_` prefix filter

  return {
    plugins: [react()],
    server: {
      port: env.APP_PORT ? Number(env.APP_PORT) : 5173,
      host: env.APP_HOST || '[IP_ADDRESS]',
    },
    build: {
      cssMinify: 'lightningcss',
      cssCodeSplit: true,
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  }
})
