import { FormEvent } from '../../node_modules/.pnpm/react@19.2.4/node_modules/react';
import { ChatMessage as ChatMessageType, ChatLabels } from '../types';
interface ChatPanelProps {
    /** Chat panel header title */
    title: string;
    /** All messages in the current conversation */
    messages: ChatMessageType[];
    /** ID of the message currently being streamed — null when not streaming */
    activeStreamId: string | null;
    /** Whether the assistant is currently streaming */
    isStreaming: boolean;
    /** Current input field value */
    inputValue: string;
    /** Called when the input value changes */
    onInputChange: (value: string) => void;
    /** Called when the message form is submitted */
    onSubmit: (event: FormEvent<HTMLFormElement>) => void;
    /** Called when the collapse button is clicked */
    onCollapse: () => void;
    /** Called when the reset history button is clicked */
    onReset: () => void;
    /** Input placeholder text */
    placeholder: string;
    /** Latency of the last response in seconds */
    latency: number | null;
    /** Custom text labels */
    labels?: ChatLabels;
}
/**
 * Full chat panel with header, scrollable message feed, and composer.
 * Auto-scrolls to the latest message when new content arrives.
 *
 * @param props - See ChatPanelProps
 */
export default function ChatPanel({ title, messages, activeStreamId, isStreaming, inputValue, onInputChange, onSubmit, onCollapse, onReset, placeholder, latency, labels, }: ChatPanelProps): import("react/jsx-runtime").JSX.Element;
export {};
