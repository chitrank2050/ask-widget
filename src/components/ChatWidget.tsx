/**
 * Root component — owns all state and orchestrates sub-components.
 * Handles the open/closed toggle and connects UI to the useChat hook.
 */

import { useState } from 'react'
import type { ChatWidgetProps } from '../types'
import { useChat } from '../hooks/useChat'
import ChatButton from './ChatButton'
import ChatPanel from './ChatPanel'

// ── Demo logic ──────────────────────────────────────────────────────────────

const wait = (ms: number) =>
  new Promise<void>((resolve) => {
    window.setTimeout(resolve, ms)
  })

const buildDemoReply = (prompt: string) => {
  const normalized = prompt.toLowerCase()
  if (normalized.includes('architecture') || normalized.includes('system')) {
    return 'Analyzing core framework... Detected V3_4_STABLE kernel. The blueprint is ready for a clean UI layer and a streaming adapter.'
  }
  if (normalized.includes('api') || normalized.includes('backend')) {
    return 'Interface boundary prepared. You can swap this demo for an async generator that yields tokens from your real API.'
  }
  return 'Signal received. The widget is streaming a mocked assistant reply right now, but it is ready for a real connection later.'
}

async function* defaultDemoStream(prompt: string) {
  const reply = buildDemoReply(prompt)
  const chunks = reply.split(' ')
  for (const [index, chunk] of chunks.entries()) {
    await wait(index === 0 ? 600 : 80)
    yield chunk + ' '
  }
}

/**
 * Root chat widget component.
 *
 * Renders a floating launcher button that expands into a full chat panel.
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
    initialMessage,
    streamResponse: streamResponse || defaultDemoStream,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    sendMessage(inputValue)
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
          onReset={clearHistory}
          placeholder={placeholder}
          latency={latency}
        />
      )}
    </div>
  )
}
