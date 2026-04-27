<script setup>
import { data as props } from './api/props.data.ts'
</script>

# API Referencessss

The `ChatWidget` component is the main entry point to add chat functionality to your site.

## `ChatWidget` Props

Below is the list of props accepted by the `ChatWidget` component. All are optional except if you want real API connectivity (require `apiUrl`).

<table>
  <thead>
    <tr>
      <th>Prop</th>
      <th>Type</th>
      <th>Default</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(info, name) in props" :key="name">
      <td><code>{{ name }}</code></td>
      <td><code>{{ info.type.name }}</code></td>
      <td><code>{{ info.defaultValue ? info.defaultValue.value : '-' }}</code></td>
      <td>{{ info.description }}</td>
    </tr>
  </tbody>
</table>

## `ChatStreamHandler` Type

If you have a non-standard API or require custom fetch logic, you can pass a `streamResponse` handler:

```ts
export type ChatStreamResult =
  | string
  | AsyncIterable<string>
  | Promise<string | AsyncIterable<string>>;

export type ChatStreamHandler = (message: string, history: ChatMessage[]) => ChatStreamResult;
```

### Example Usage

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
