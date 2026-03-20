import { useState, useCallback } from 'react'
import type { ChatMessage, ChatStreamHandler, ChatStreamResult } from '../types'

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

const isAsyncIterable = (value: unknown): value is AsyncIterable<string> =>
  typeof value === 'object' &&
  value !== null &&
  Symbol.asyncIterator in value &&
  typeof value[Symbol.asyncIterator] === 'function'

async function* toAsyncChunks(stream: ChatStreamResult) {
  const resolved = await stream
  if (isAsyncIterable(resolved)) {
    for await (const chunk of resolved) yield chunk
    return
  }
  yield resolved
}

interface UseChatOptions {
  initialMessage?: string
  streamResponse?: ChatStreamHandler
}

export function useChat({ initialMessage, streamResponse }: UseChatOptions = {}) {
  const [messages, setMessages] = useState<ChatMessage[]>(() => {
    if (!initialMessage?.trim()) return []
    return [createMessage('assistant', initialMessage, true)]
  })
  const [isStreaming, setIsStreaming] = useState(false)
  const [latency, setLatency] = useState<number | null>(null)
  const [activeStreamId, setActiveStreamId] = useState<string | null>(null)
  const [inputValue, setInputValue] = useState('')

  const sendMessage = useCallback(
    async (content: string) => {
      const prompt = content.trim()
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
        if (!streamResponse) {
          throw new Error('No stream response handler provided')
        }

        const stream = toAsyncChunks(streamResponse(prompt, nextHistory))

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
    },
    [isStreaming, messages, streamResponse]
  )

  const clearHistory = useCallback(() => {
    setMessages(initialMessage ? [createMessage('assistant', initialMessage, true)] : [])
    setLatency(null)
    setInputValue('')
  }, [initialMessage])

  return {
    messages,
    isStreaming,
    latency,
    activeStreamId,
    inputValue,
    setInputValue,
    sendMessage,
    clearHistory,
  }
}
