# Getting Started

**ask-widget** is a lightweight React component for adding a RAG-powered chat assistant to your developer portfolio. It’s strictly monochrome by default and designed to align with the popular "zinc/neutral" aesthetic.

## Installation

```bash
# with npm
npm install ask-widget

# with pnpm
pnpm add ask-widget

# with yarn
yarn add ask-widget
```

## Basic Usage

To use the widget, render it at the root of your application (or any top-level layout).

```tsx
import { ChatWidget } from 'ask-widget'
import 'ask-widget/styles.css'

export default function App() {
  return (
    <main>
      <ChatWidget
        apiUrl="https://your-api.example.com"
        apiToken={process.env.NEXT_PUBLIC_CHAT_API_TOKEN}
        position="bottom-right"
        theme="dark"
        title="Ask Anything"
      />
    </main>
  )
}
```

## Prerequisites

To enable real chat streaming, you'll need an API that supports Server-Sent Events (SSE). By default, `ask-widget` expects an OpenAI-compatible endpoint at `/v1/chat` that accepts a `POST` request with a `messages` array in the body.

If you don't have a backend ready yet, the widget will automaticly run in **demo mode** (interactive mocked responses).
