# API Reference

The `ChatWidget` component is the main entry point to add chat functionality to your site.

## `ChatWidget` Props

Below is the list of props accepted by the `ChatWidget` component. All are optional except if you want real API connectivity (require `apiUrl`).

| Prop | Type | Default | Description |
|---|---|---|---|
| `apiUrl` | `string` | — | Base URL of your chat API. |
| `apiToken` | `string` | — | Bearer token for API authentication. Provide via environment variables. |
| `position` | `"bottom-right" \| "bottom-left" \| "bottom-center"` | `"bottom-right"` | Where the widget appears on screen. |
| `theme` | `"dark" \| "light"` | `"dark"` | Color theme preset. |
| `colors` | `ChatColors` | — | Custom color overrides for primary, background, text, border, userbubble, and surface. |
| `labels` | `ChatLabels` | — | Custom text for TECHNICAL indicators (assistant tags, latency text, etc.). |
| `persistenceKey` | `string` | `"ask_widget_session"` | localStorage key for history persistence. |
| `title` | `string` | `"Ask AI"` | Title shown in the chat panel header. |
| `placeholder` | `string` | `"Ask me anything..."` | Placeholder text in the message input. |
| `initialMessage` | `string` | `"Hello! How can I help you today?"` | First message displayed when the panel opens. |
| `defaultOpen` | `boolean` | `false` | Whether the chat panel starts open. |
| `streamResponse` | `ChatStreamHandler` | — | Custom response handler — takes full control of streaming. |

## `ChatStreamHandler` Type

If you have a non-standard API or require custom fetch logic, you can pass a `streamResponse` handler:

```ts
export type ChatStreamResult =
  | string
  | AsyncIterable<string>
  | Promise<string | AsyncIterable<string>>

export type ChatStreamHandler = (
  message: string, 
  history: ChatMessage[]
) => ChatStreamResult
```

### Example Usage:

```tsx
const streamResponse: ChatStreamHandler = async function* (message, history) {
  const res = await fetch('/api/chat', { 
    method: 'POST', 
    body: JSON.stringify({ message, history }) 
  })
  
  if (!res.ok) throw new Error('API request failed')
  
  const reader = res.body!.getReader()
  // decode and yield tokens...
}

<ChatWidget streamResponse={streamResponse} />
```
