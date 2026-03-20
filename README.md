# ask-widget

> A lightweight chat widget for developer portfolios. Drop-in floating chat with SSE streaming, dark/light themes, and configurable positioning. Aligned with the neutral zinc palette.

![npm](https://img.shields.io/npm/v/ask-widget)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![React](https://img.shields.io/badge/React-18+-61dafb)
![License](https://img.shields.io/badge/License-MIT-yellow)
![Version](https://img.shields.io/badge/Version-0.2.0-blue)

---

## 📖 Full Documentation
**Visit the [ask-widget documentation site](https://github.com/chitrank2050/ask-widget/docs) for full details on API, theming, and standalone hooks.**

---

## Installation

```bash
npm install ask-widget
# or
pnpm add ask-widget
```

---

## Quick Start

```tsx
import { ChatWidget } from 'ask-widget'
import 'ask-widget/styles.css'

export default function Portfolio() {
  return (
    <main>
      <ChatWidget
        apiUrl="https://your-api.example.com"
        apiToken={import.meta.env.VITE_CHAT_API_TOKEN}
        position="bottom-right"
        theme="dark"
        title="Ask AI"
      />
    </main>
  )
}
```

---

## Features

- **⚡ SSE Streaming**: Built-in support for token-by-token streaming via Server-Sent Events.
- **🎨 Zinc Aesthetic**: Strictly monochrome. Designed to match modern developer portfolios.
- **🧩 Configurable API**: Control themes, initial messages, placeholders, and positions.
- **🛠 Demo Mode**: Built-in fallback stream if no API is configured.
- **🧩 Headless Hooks**: Build your own UI with `useChat`, `useSSEStream`, and `useSession`.

---

## Core Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `apiUrl` | `string` | — | Base URL of your chat API. |
| `apiToken` | `string` | — | Bearer token for API auth. |
| `position` | `"bottom-right" \| "bottom-left" \| "bottom-center"` | `"bottom-right"` | Widget position on screen. |
| `theme` | `"dark" \| "light"` | `"dark"` | Color theme preset. |
| `title` | `string` | `"Ask AI"` | Header title. |
| `placeholder` | `string` | `"Ask me anything..."` | Input placeholder. |
| `initialMessage` | `string` | `"Hello! How can I help you today?"` | First message shown on open. |

---

## Roadmap

- [x] Phase 1 — Project setup (config, tooling, build pipeline)
- [x] Phase 2 — Core types and theme system
- [x] Phase 3 — Hooks (session, SSE streaming, chat state)
- [x] Phase 4 — Components (button, panel, message, input)
- [x] Phase 5 — Testing + Sample Stories
- [x] Phase 6 — Documentation (VitePress)
- [ ] Phase 7 — npm publish + portfolio integration

---

Developed by [Chitrank Agnihotri](https://www.chitrankagnihotri.com)