import { TerminalIcon } from './Icons'

interface ChatButtonProps {
  /** Accessible label for the button — uses widget title */
  title: string
  /** Text shown in the pill (e.g., "ASK ME") */
  label?: string
  /** Current theme for styling */
  theme: 'light' | 'dark'
  /** Called when the button is clicked */
  onClick: () => void
}

export default function ChatButton({ title, label, theme, onClick }: ChatButtonProps) {
  return (
    <button
      type="button"
      className={`chat-widget__launcher chat-widget__launcher--pill chat-widget__launcher--${theme}`}
      onClick={onClick}
      aria-label={`Open ${title}`}
    >
      <div className="chat-widget__launcher-content">
        <TerminalIcon />
        <span className="chat-widget__launcher-text">{label || title}</span>
      </div>
      <span className="chat-widget__launcher-status-dot" />
    </button>
  )
}
