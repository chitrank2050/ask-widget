import './styles/variables.css'
import './styles/themes.css'
import './styles/widget.css'

// ── Main component ────────────────────────────────────────────────────────────
export { default as ChatWidget } from './components/ChatWidget'

// ── Hooks — for custom UIs ────────────────────────────────────────────────────
export { useChat } from './hooks/useChat'
export { useSSEStream } from './hooks/useSSEStream'
export type { SSEStreamOptions } from './hooks/useSSEStream'
export { useSession } from './hooks/useSession'
export { demoStream } from './lib/demoStream'

// ── Types — consumers need these to use the component ────────────────────────
export type {
  ChatColors,
  ChatMessage,
  ChatPosition,
  ChatStreamHandler,
  ChatTheme,
  ChatWidgetProps,
  ChatStreamResult,
} from './types/index'
