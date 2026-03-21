import { useState, useCallback, useEffect } from 'react'
import type { ChatMessage } from '../types'

/**
 * Hook providing persistence for chat history.
 * Helps with Phase 3 — Session Persistence.
 */
export function useSession(id = 'ask-widget-session', initialMessages: ChatMessage[] = []) {
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages)

  // Load from localStorage on mount (Client-only)
  useEffect(() => {
    try {
      const stored = localStorage.getItem(`widget-session-${id}`)
      if (stored) {
        const parsed = JSON.parse(stored) as Array<{ timestamp: string | Date }>
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMessages(
          parsed.map((m) => ({
            ...m,
            timestamp: new Date(m.timestamp),
          })) as ChatMessage[]
        )
      }
    } catch (e) {
      console.warn('Failed to load chat session', e)
    }
  }, [id])

  // Sync to localStorage on message changes
  useEffect(() => {
    try {
      localStorage.setItem(`widget-session-${id}`, JSON.stringify(messages))
    } catch (e) {
      console.warn('Failed to save chat session', e)
    }
  }, [messages, id])

  const addMessage = useCallback((message: ChatMessage) => {
    setMessages((current) => [...current, message])
  }, [])

  const updateMessage = useCallback((id: string, update: Partial<ChatMessage>) => {
    setMessages((current) => current.map((m) => (m.id === id ? { ...m, ...update } : m)))
  }, [])

  const clearSession = useCallback(() => {
    setMessages(initialMessages)
    localStorage.removeItem(`widget-session-${id}`)
  }, [id, initialMessages])

  return {
    messages,
    addMessage,
    updateMessage,
    clearSession,
    setMessages,
  }
}
