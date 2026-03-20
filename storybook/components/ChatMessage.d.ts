import { ChatMessage as ChatMessageType, ChatLabels } from '../types';
interface ChatMessageProps {
    /** The message data to render */
    message: ChatMessageType;
    /** Whether this message is currently being streamed — shows blinking cursor */
    isStreaming: boolean;
    /** Custom text labels */
    labels?: ChatLabels;
}
/**
 * Renders a single chat message — user bubble or assistant response.
 * Shows a blinking cursor on the active streaming assistant message.
 *
 * @param props - See ChatMessageProps
 */
export default function ChatMessage({ message, isStreaming, labels }: ChatMessageProps): import("react/jsx-runtime").JSX.Element;
export {};
