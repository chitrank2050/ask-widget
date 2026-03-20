---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "ask-widget"
  text: "Drop-in AI chat for your portfolio."
  tagline: Lightweight, RAG-powered, and strictly monochrome.
  actions:
    - theme: brand
      text: Get Started
      link: /getting-started
    - theme: alt
      text: API Reference
      link: /api

features:
  - title: ⚡ SSE Streaming
    details: Real-time token streaming via Server-Sent Events. Built-in support for OpenAI-compatible backends.
  - title: 🎨 Zinc Aesthetic
    details: Designed specifically for modern developer portfolios using the neutral zinc/neutral palette.
  - title: 🧩 Headless Hooks
    details: Don't like the UI? Use standalone hooks (`useChat`, `useSSEStream`) to build your own interface.
  - title: 🛠 Fully Configurable
    details: Control position, initial messages, theme, and custom styling with a simple, prop-based API.
---
