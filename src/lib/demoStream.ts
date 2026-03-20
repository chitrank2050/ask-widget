/**
 * Built-in demo stream — used when no `streamResponse` is provided.
 *
 * This is a word-by-word mock that simulates streaming responses.
 * Replace it by passing a real `streamResponse` prop to `<ChatWidget />`.
 */

const wait = (ms: number) =>
  new Promise<void>((resolve) => {
    window.setTimeout(resolve, ms)
  })

const DEMO_REPLIES = [
  'Hello! I am a demo assistant. Pass a `streamResponse` prop to connect me to your real backend.',
  'No API configured yet. You can pass a `streamResponse` function to handle real chat requests.',
  'I am running in demo mode. Provide a `streamResponse` or use the `useSSEStream` hook to get started.',
]

const getDemoReply = () => DEMO_REPLIES[Math.floor(Math.random() * DEMO_REPLIES.length)]!

export async function* demoStream() {
  const reply = getDemoReply()
  const chunks = reply.split(' ')
  for (const [index, chunk] of chunks.entries()) {
    await wait(index === 0 ? 400 : 60)
    yield chunk + ' '
  }
}
