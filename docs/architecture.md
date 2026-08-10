# Architecture Overview

This document describes the high-level architecture and design of `@chitrank2050/ask-widget`.

## Component Layer

The main entry point is the `ChatWidget` component. It renders a floating chat action button and a collapsible chat panel containing:

- **Message List**: Renders conversation history with support for styling code snippets and user/assistant message variants.
- **Input Area**: Captures user text and manages the submission state.

## State & Hooks Layer (Headless API)

The business logic is decoupled from the UI using custom hooks:

- `useChat`: Manages state for the conversation (messages array, loading state, input state).
- `useSSEStream`: Connects to the SSE streaming API and streams tokens sequentially.
- `useSession`: Manages state persistence across page reloads (using `sessionStorage` or `localStorage`).

## Style & Presentation Layer

The UI is styled using Vanilla CSS with CSS Cascade Layers (`@layer`) to guarantee style encapsulation and prevent styles from leaking into the parent page (host application). Variables are driven by HSL tokens conforming to the neutral zinc palette.
