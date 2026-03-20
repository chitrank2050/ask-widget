import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ask-widget",
  description: "A lightweight, RAG-powered chat widget for developer portfolios.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/getting-started' },
      { text: 'API Reference', link: '/api' }
    ],

    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Introduction', link: '/' },
          { text: 'Getting Started', link: '/getting-started' },
        ]
      },
      {
        text: 'Documentation',
        items: [
          { text: 'API Reference', link: '/api' },
          { text: 'Theming', link: '/theming' },
          { text: 'Standalone Hooks', link: '/hooks' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/chitrank2050/ask-widget' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2026-present Chitrank Agnihotri'
    }
  }
})
