# ask-widget

> A lightweight, RAG-powered chat widget for developer portfolios. Drop-in floating chat with SSE streaming, dark/light themes, and configurable positioning.

![npm](https://img.shields.io/npm/v/ask-widget)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![React](https://img.shields.io/badge/React-18+-61dafb)
![License](https://img.shields.io/badge/License-MIT-yellow)
![Version](https://img.shields.io/badge/version-0.1.0-brightgreen)

---

## Links

| | URL |
|---|---|
<!-- | 📦 npm | https://www.npmjs.com/package/ask-widget | -->
| 📚 Documentation | https://chitrank2050.github.io/ask-widget |
| 👤 Portfolio | https://chitrankagnihotri.com |

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

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `apiUrl` | `string` | required | Base URL of the ask-chitrank API |
| `apiToken` | `string` | required | Bearer token for API auth. Use env var — never hardcode. |
| `position` | `"bottom-right" \| "bottom-left" \| "bottom-center"` | `"bottom-right"` | Widget position on screen |
| `theme` | `"dark" \| "light"` | `"dark"` | Color theme preset |
| `colors` | `ChatColors` | — | Custom color overrides |
| `title` | `string` | `"Ask Chitrank"` | Chat panel header title |
| `placeholder` | `string` | `"Ask me anything..."` | Input placeholder text |
| `initialMessage` | `string` | `"Hi! Ask me about Chitrank's experience..."` | First message shown on open |
| `defaultOpen` | `boolean` | `false` | Whether panel starts open |

---

## Theming

### Built-in themes

```tsx
<ChatWidget theme="dark" ... />   // dark background, light text
<ChatWidget theme="light" ... />  // light background, dark text
```

### Custom colors

```tsx
<ChatWidget
  theme="dark"
  colors={{
    primary: '#6366f1',      // accent color — buttons, user messages
    background: '#0f0f0f',   // panel background
    text: '#ffffff',         // text color
    border: '#2a2a2a',       // border color
  }}
  ...
/>
```

---

## Roadmap

- [x] Phase 1 — Project setup (config, tooling, build pipeline)
- [ ] Phase 2 — Core types and theme system
- [ ] Phase 3 — Hooks (session, SSE streaming, chat state)
- [ ] Phase 4 — Components (button, panel, message, input)
- [ ] Phase 5 — Testing
- [ ] Phase 6 — npm publish + portfolio integration

---

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

---

## License

MIT — see [LICENSE](LICENSE).