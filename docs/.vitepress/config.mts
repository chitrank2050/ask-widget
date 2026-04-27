import { defineConfig } from 'vitepress'
import { resolve } from 'path'
import reactDocgenTypescript from '@joshwooding/vite-plugin-react-docgen-typescript'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'ask-widget',
  description: 'A lightweight chat widget for developer portfolios.',
  base: '/ask-widget/',
  ignoreDeadLinks: true,
  vite: {
    plugins: [
      reactDocgenTypescript({
        tsconfigPath: resolve(__dirname, '../../tsconfig.app.json'),
        propFilter: (prop) => {
          if (prop.parent) {
            return !prop.parent.fileName.includes('@types/react')
          }
          return true
        },
      }) as any,
    ],
  },
  themeConfig: {
    // ... (rest of themeConfig)
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/getting-started' },
      { text: 'API Reference', link: '/api' },
    ],

    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Introduction', link: '/' },
          { text: 'Getting Started', link: '/getting-started' },
        ],
      },
      {
        text: 'Documentation',
        items: [
          { text: 'API Reference', link: '/api' },
          { text: 'Theming', link: '/theming' },
          { text: 'Standalone Hooks', link: '/hooks' },
        ],
      },
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/chitranklabs/ask-widget' }],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2026-present Chitrank Agnihotri',
    },
  },
})
