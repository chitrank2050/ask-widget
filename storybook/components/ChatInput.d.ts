import { SyntheticEvent } from '../../node_modules/.pnpm/react@19.2.4/node_modules/react';
import { ChatLabels } from '../types';
interface ChatInputProps {
    /** Current input field value */
    value: string;
    /** Called when the input value changes */
    onChange: (value: string) => void;
    /** Called when the form is submitted */
    onSubmit: (event: SyntheticEvent<HTMLFormElement>) => void;
    /** Whether the assistant is currently streaming — disables input */
    isStreaming: boolean;
    /** Placeholder text for the input field */
    placeholder: string;
    /** Latency of the last response in seconds — null while streaming */
    latency: number | null;
    /** Custom text labels */
    labels?: ChatLabels;
}
/**
 * Chat composer with input, send button, tool icons, and latency display.
 *
 * @param props - See ChatInputProps
 */
export default function ChatInput({ value, onChange, onSubmit, isStreaming, placeholder, latency, labels, }: ChatInputProps): import("react/jsx-runtime").JSX.Element;
export {};
