# Standalone Hooks

**ask-widget** is more than just a component—it's a collection of headless hooks that you can use to build your own completely custom chat interface.

### `useChat`

Manages chat state, message history, and the streaming lifecycle.

```tsx
import { useChat } from 'ask-widget'

const {
  messages,
  isStreaming,
  latency,
  activeStreamId,
  inputValue,
  setInputValue,
  sendMessage,
  clearHistory,
} = useChat({
  initialMessage: "Hi! How can I help?",
  streamResponse: async function* (message) { 
    yield message.toUpperCase() 
  }
})
```

### `useSSEStream`

Handles the SSE connection, fetch headers, and token parsing from any API.

```tsx
import { useSSEStream } from 'ask-widget'

const { streamResponse } = useSSEStream({
  apiUrl: "https://my-api.com",
  apiToken: "...",
  path: "/v1/chat",
  // also takes customizable body builders and chunk extractors
})

<MyCustomUI onSend={(msg) => streamResponse(msg, history)} />
```

### `useSession`

A simple hook to handle message persistence to `localStorage`.

```tsx
import { useSession } from 'ask-widget'

const { messages, saveMessages, clearSession } = useSession({
  key: "my_chat_session"
})
```
