/**
 * Renders a single message — either user bubble or assistant response.
 * Handles the streaming cursor when the assistant is actively responding.
 */

import type { ChatMessage as ChatMessageType, ChatLabels } from '../types'
import { TerminalIcon } from './Icons'

const timeFormatter = new Intl.DateTimeFormat('en-US', {
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: false,
})

const formatTimestamp = (timestamp: Date) => `T-${timeFormatter.format(timestamp)}`

interface ChatMessageProps {
  /** The message data to render */
  message: ChatMessageType
  /** Whether this message is currently being streamed — shows blinking cursor */
  isStreaming: boolean
  /** Custom text labels */
  labels?: ChatLabels
}

/**
 * Renders a single chat message — user bubble or assistant response.
 * Shows a blinking cursor on the active streaming assistant message.
 *
 * @param props - See ChatMessageProps
 */
export default function ChatMessage({ message, isStreaming, labels }: ChatMessageProps) {
  if (message.role === 'user') {
    return (
      <article className="chat-widget__message chat-widget__message--user">
        <div className="chat-widget__bubble">
          <p>{message.content}</p>
        </div>
        <span className="chat-widget__timestamp">{formatTimestamp(message.timestamp)}</span>
      </article>
    )
  }

  const isWaitingForFirstToken = isStreaming && message.content.length === 0

  return (
    <article className="chat-widget__message chat-widget__message--assistant">
      <div className="chat-widget__assistant-label">
        <TerminalIcon />
        <span>
          {message.cached
            ? labels?.cacheTag || 'AI_ANALYSIS_CACHE'
            : labels?.assistantTag || 'AI_ANALYSIS_STREAM'}
        </span>
      </div>

      <div className="chat-widget__assistant-body">
        <div className="chat-widget__assistant-rail" />
        <div className="chat-widget__assistant-copy">
          {isWaitingForFirstToken ? (
            <div className="chat-widget__loading" aria-label="Loading response">
              <div className="chat-widget__loading-line" />
              <div className="chat-widget__loading-line" />
              <div className="chat-widget__loading-line" />
            </div>
          ) : (
            <>
              <p>{message.content}</p>
              {isStreaming ? <span className="chat-widget__cursor" aria-hidden="true" /> : null}
            </>
          )}
        </div>
      </div>
    </article>
  )
}
