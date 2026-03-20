import { ChatWidgetProps } from '../types';
/**
 * Root chat widget component.
 *
 * Renders a floating launcher button that expands into a full chat panel.
 *
 * **Response modes (in priority order):**
 * 1. `streamResponse` — supply your own async generator / fetch logic
 * 2. `apiUrl` — auto-connects to a standard SSE endpoint (OpenAI-compatible by default)
 * 3. No props — runs a built-in demo stream so you can see the UI immediately
 *
 * @example Basic usage with your own API
 * ```tsx
 * <ChatWidget
 *   apiUrl="https://your-api.example.com"
 *   apiToken={process.env.NEXT_PUBLIC_API_TOKEN}
 *   title="Ask Anything"
 * />
 * ```
 *
 * @example Bring your own stream handler
 * ```tsx
 * <ChatWidget streamResponse={myCustomHandler} />
 * ```
 */
export default function ChatWidget({ position, theme, title, placeholder, initialMessage, defaultOpen, apiUrl, apiToken, streamResponse, colors, labels, persistenceKey, }: ChatWidgetProps): import("react/jsx-runtime").JSX.Element;
