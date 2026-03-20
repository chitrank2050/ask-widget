/**
 * Public package entry point.
 * Only what is exported here is available to consumers of the package.
 */

// ── Main component ────────────────────────────────────────────────────────────
export { default as ChatWidget } from './components/ChatWidget'

// ── Hooks — for custom UIs ────────────────────────────────────────────────────
export { useChat } from './hooks/useChat'
export { useSSEStream } from './hooks/useSSEStream'
export { useSession } from './hooks/useSession'

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
