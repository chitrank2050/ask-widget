# ask-widget

> A lightweight, RAG-powered chat widget for developer portfolios. Drop-in floating chat with SSE streaming, dark/light themes, and configurable positioning. Aligned with the neutral zinc palette.

![npm](https://img.shields.io/npm/v/ask-widget)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![React](https://img.shields.io/badge/React-18+-61dafb)
![License](https://img.shields.io/badge/License-MIT-yellow)

---

## What It Does

A floating chat button that expands into a full chat panel. Connects to any [ask-chitrank](https://github.com/chitrank2050/askchitrank) compatible RAG API and streams responses token by token via Server-Sent Events.

---

## Installation

```bash
npm install ask-widget
# or
pnpm add ask-widget
```

---

## Usage

```tsx
import { ChatWidget } from 'ask-widget'
import 'ask-widget/styles.css'

export default function Portfolio() {
  return (
    <main>
      <ChatWidget
        apiUrl="https://your-api.railway.app"
        apiToken={process.env.NEXT_PUBLIC_CHAT_API_TOKEN}
        position="bottom-right"
        theme="dark"
        title="Ask Chitrank"
      />
    </main>
  )
}
```

---

## Hooks

If you want to build a completely custom UI but keep the streaming and session logic, you can use the standalone hooks:

### `useChat`
Manages chat state, message history, and streaming lifecycle.

### `useSSEStream`
Handles the SSE connection and token parsing from the `ask-chitrank` backend.

### `useSession`
Persists message history to `localStorage` for returning users.

---

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `apiUrl` | `string` | required | Base URL of the ask-chitrank API |
| `apiToken` | `string` | required | Bearer token for API auth. |
| `position` | `"bottom-right" \| "bottom-left" \| "bottom-center"` | `"bottom-right"` | Widget position on screen |
| `theme` | `"dark" \| "light"` | `"dark"` | Color theme preset |
| `colors` | `ChatColors` | — | Custom color overrides |
| `title` | `string` | `"Ask Chitrank"` | Chat panel header title |
| `placeholder` | `string` | `"Ask me anything..."` | Input placeholder text |
| `initialMessage` | `string` | `"Hi! Ask me about Chitrank's experience..."` | First message shown on open |
| `defaultOpen` | `boolean` | `false` | Whether panel starts open |
| `streamResponse` | `ChatStreamHandler` | — | Inject custom stream logic |

---

## Roadmap

- [x] Phase 1 — Project setup (config, tooling, build pipeline)
- [x] Phase 2 — Core types and theme system
- [x] Phase 3 — Hooks (session, SSE streaming, chat state)
- [x] Phase 4 — Components (button, panel, message, input)
- [x] Phase 5 — Testing + Sample Stories
- [ ] Phase 6 — npm publish + portfolio integration

---

## Developing

```bash
pnpm install
pnpm dev      # start preview page
pnpm test     # run unit tests
```

Developed by [Chitrank Agnihotri](https://www.chitrankagnihotri.com)