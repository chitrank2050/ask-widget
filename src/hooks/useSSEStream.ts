import { useCallback } from 'react'
import type { ChatMessage } from '../types'

/**
 * Hook providing a standard SSE-backed response adapter for the ask-chitrank API.
 * This can be passed to the ChatWidget's `streamResponse` prop if you want
 * to use the default API integration logic.
 */
export function useSSEStream(apiUrl?: string, apiToken?: string) {
  const streamResponse = useCallback(
    async function* (_message: string, history: ChatMessage[]) {
      if (!apiUrl) {
        throw new Error('API URL is required to stream from backend.')
      }

      const response = await fetch(`${apiUrl}/v1/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(apiToken ? { Authorization: `Bearer ${apiToken}` } : {}),
        },
        body: JSON.stringify({
          messages: history.map((m) => ({ role: m.role, content: m.content })),
          // Send current message as the last item if it's not already in history
          // although typically useChat adds it to history before calling this.
        }),
      })

      if (!response.ok) {
        const error = await response.json().catch(() => ({ detail: 'Unknown network error' }))
        throw new Error(error.detail || 'API request failed')
      }

      const reader = response.body?.getReader()
      if (!reader) throw new Error('Response body is null')

      const decoder = new TextDecoder()
      let buffer = ''

      try {
        while (true) {
          const { done, value } = await reader.read()
          if (done) break

          buffer += decoder.decode(value, { stream: true })
          const lines = buffer.split('\n')
          buffer = lines.pop() || ''

          for (const line of lines) {
            const trimmed = line.trim()
            if (!trimmed || !trimmed.startsWith('data: ')) continue

            const data = trimmed.slice(6)
            if (data === '[DONE]') break

            try {
              const parsed = JSON.parse(data)
              const content = parsed.choices?.[0]?.delta?.content || ''
              if (content) yield content
            } catch (e) {
              console.warn('Failed to parse SSE data:', e)
            }
          }
        }
      } finally {
        reader.releaseLock()
      }
    },
    [apiUrl, apiToken]
  )

  return { streamResponse }
}
