/**
 * Composer area — text input, send button, tool icons, and latency display.
 * Calls onSubmit when the form is submitted with a non-empty value.
 */

import type { SyntheticEvent } from 'react'
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
}: ChatInputProps) {
  return (
    <form className="chat-widget__composer" onSubmit={onSubmit}>
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
          LATENCY: {latency === null ? 'LIVE' : `${Math.max(latency, 0.003).toFixed(3)}s`}
        </p>
      </div>
    </form>
  )
}
