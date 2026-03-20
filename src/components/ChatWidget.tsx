/**
 * Root component — owns all state and orchestrates sub-components.
 * Handles the open/closed toggle, message state, and streaming logic.
 *
 * Sub-components:
 *   ChatButton  — floating launcher button (closed state)
 *   ChatPanel   — expanded chat window (open state)
 */

import type { FormEvent } from 'react'
import { useState } from 'react'
import type { ChatMessage, ChatStreamHandler, ChatWidgetProps } from '../types'
import ChatButton from './ChatButton'
import ChatPanel from './ChatPanel'

// ── Helpers ───────────────────────────────────────────────────────────────────

const getNow = () => performance.now()

const createId = (role: ChatMessage['role']) => {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return `${role}-${crypto.randomUUID()}`
  }
  return `${role}-${Date.now()}-${Math.random().toString(16).slice(2)}`
}

const createMessage = (
  role: ChatMessage['role'],
  content: string,
  cached = false
): ChatMessage => ({
  id: createId(role),
  role,
  content,
  timestamp: new Date(),
  cached,
})

const createInitialMessages = (initialMessage?: string): ChatMessage[] => {
  if (!initialMessage?.trim()) return []
  return [createMessage('assistant', initialMessage, true)]
}

const isAsyncIterable = (value: unknown): value is AsyncIterable<string> =>
  typeof value === 'object' &&
  value !== null &&
  Symbol.asyncIterator in value &&
  typeof value[Symbol.asyncIterator] === 'function'

async function* toAsyncChunks(stream: ReturnType<ChatStreamHandler>) {
  const resolved = await stream
  if (isAsyncIterable(resolved)) {
    for await (const chunk of resolved) yield chunk
    return
  }
  yield resolved
}

// ── Demo stream (used when no streamResponse prop is provided) ────────────────

const wait = (ms: number) =>
  new Promise<void>((resolve) => {
    window.setTimeout(resolve, ms)
  })

const buildDemoReply = (prompt: string) => {
  const normalized = prompt.toLowerCase()

  if (
    normalized.includes('architecture') ||
    normalized.includes('system') ||
    normalized.includes('project')
  ) {
    return (
      'Analyzing core framework... Detected V3_4_STABLE kernel. ' +
      'The current blueprint is ready for a clean UI layer, a streaming adapter, ' +
      'and a later SSE-backed response pipeline without changing the chat surface.'
    )
  }

  if (normalized.includes('api') || normalized.includes('backend') || normalized.includes('sse')) {
    return (
      'Interface boundary prepared. You can swap the demo stream for an async ' +
      'generator that yields tokens from your API, while the widget keeps the ' +
      'same expanded panel, message list, and input controls.'
    )
  }

  if (normalized.includes('design') || normalized.includes('ui') || normalized.includes('style')) {
    return (
      'Terminal layout stabilized. Monochrome surfaces, compact chrome, and a ' +
      'fixed launcher keep the interaction feeling focused, technical, and small ' +
      'enough to sit on top of an existing portfolio page.'
    )
  }

  return (
    'Signal received. The widget is streaming a mocked assistant reply right now, ' +
    'but the rendering path is already shaped for a real backend connection later.'
  )
}

async function* defaultDemoStream(prompt: string) {
  const chunks = (buildDemoReply(prompt).match(/\S+\s*/g) ?? [prompt]).reduce<string[]>(
    (parts, token, index) => {
      if (index % 3 === 0) {
        parts.push(token)
        return parts
      }
      const lastIndex = parts.length - 1
      parts[lastIndex] += token
      return parts
    },
    []
  )

  for (const [index, chunk] of chunks.entries()) {
    await wait(index === 0 ? 600 : 85)
    yield chunk
  }
}

// ── Component ─────────────────────────────────────────────────────────────────

/**
 * Root chat widget component.
 *
 * Renders a floating launcher button that expands into a full chat panel.
 * Manages all state: open/closed, messages, streaming, latency.
 *
 * @param props - See ChatWidgetProps
 *
 * @example
 * ```tsx
 * <ChatWidget
 *   apiUrl="https://your-api.railway.app"
 *   apiToken={process.env.NEXT_PUBLIC_CHAT_API_TOKEN}
 *   theme="dark"
 *   position="bottom-right"
 * />
 * ```
 */
export default function ChatWidget({
  position = 'bottom-right',
  theme = 'dark',
  title = 'Ask Widget',
  placeholder = 'Ask me anything...',
  initialMessage = 'Link established. Ask the assistant to inspect your stack, summarize a feature, or explain a system.',
  defaultOpen = false,
  streamResponse,
}: ChatWidgetProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)
  const [inputValue, setInputValue] = useState('')
  const [isStreaming, setIsStreaming] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>(() =>
    createInitialMessages(initialMessage)
  )
  const [latency, setLatency] = useState<number | null>(null)
  const [activeStreamId, setActiveStreamId] = useState<string | null>(null)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const prompt = inputValue.trim()
    if (!prompt || isStreaming) return

    const startedAt = getNow()
    const userMessage = createMessage('user', prompt)
    const assistantMessage = createMessage('assistant', '')
    const nextHistory = [...messages, userMessage]

    setMessages([...nextHistory, assistantMessage])
    setInputValue('')
    setLatency(null)
    setIsStreaming(true)
    setActiveStreamId(assistantMessage.id)

    let sawFirstChunk = false

    try {
      const stream = streamResponse
        ? toAsyncChunks(streamResponse(prompt, nextHistory))
        : defaultDemoStream(prompt)

      for await (const chunk of stream) {
        if (!sawFirstChunk) {
          setLatency((getNow() - startedAt) / 1000)
          sawFirstChunk = true
        }

        setMessages((current) =>
          current.map((msg) =>
            msg.id === assistantMessage.id ? { ...msg, content: msg.content + chunk } : msg
          )
        )
      }

      if (!sawFirstChunk) {
        setLatency((getNow() - startedAt) / 1000)
      }
    } catch (error) {
      const fallback = error instanceof Error ? error.message : 'Unable to complete response.'
      setMessages((current) =>
        current.map((msg) =>
          msg.id === assistantMessage.id
            ? { ...msg, content: `Stream interrupted. ${fallback}` }
            : msg
        )
      )
    } finally {
      setIsStreaming(false)
      setActiveStreamId(null)
    }
  }

  return (
    <div className={`chat-widget chat-widget--${position}`} data-theme={theme}>
      {!isOpen ? (
        <ChatButton title={title} onClick={() => setIsOpen(true)} />
      ) : (
        <ChatPanel
          title={title}
          messages={messages}
          activeStreamId={activeStreamId}
          isStreaming={isStreaming}
          inputValue={inputValue}
          onInputChange={setInputValue}
          onSubmit={handleSubmit}
          onCollapse={() => setIsOpen(false)}
          placeholder={placeholder}
          latency={latency}
        />
      )}
    </div>
  )
}
