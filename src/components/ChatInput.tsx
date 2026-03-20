import type { SyntheticEvent } from 'react'
import type { ChatLabels } from '../types'
import { SendIcon } from './Icons'

interface ChatInputProps {
  /** Current input field value */
  value: string
  /** Called when the input value changes */
  onChange: (value: string) => void
  /** Called when the form is submitted */
  onSubmit: (event: SyntheticEvent<HTMLFormElement>) => void
  /** Whether the assistant is currently streaming — disables input */
  isStreaming: boolean
  /** Placeholder text for the input field */
  placeholder: string
  /** Latency of the last response in seconds — null while streaming */
  latency: number | null
  /** Custom text labels */
  labels?: ChatLabels
}

/**
 * Chat composer with input, send button, tool icons, and latency display.
 *
 * @param props - See ChatInputProps
 */
export default function ChatInput({
  value,
  onChange,
  onSubmit,
  isStreaming,
  placeholder,
  latency,
  labels,
}: ChatInputProps) {
  return (
    <form
      className="chat-widget__composer"
      onSubmit={onSubmit}
      role="form"
      aria-label="Chat message form"
    >
      <div className="chat-widget__input-row">
        <input
          type="text"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={isStreaming ? 'Streaming response...' : placeholder}
          disabled={isStreaming}
          aria-label="Message input"
        />

        <button
          type="submit"
          className="chat-widget__send"
          disabled={isStreaming || value.trim().length === 0}
          aria-label="Send message"
        >
          <SendIcon />
        </button>
      </div>

      <div className="chat-widget__composer-meta">
        <p className="chat-widget__latency">
          {labels?.latencyPrefix || 'LATENCY'}:{' '}
          {latency === null ? 'LIVE' : `${Math.max(latency, 0.003).toFixed(3)}s`}
        </p>
      </div>
    </form>
  )
}
