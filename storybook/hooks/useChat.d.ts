import { ChatMessage, ChatStreamHandler } from '../types';
interface UseChatOptions {
    initialMessage?: string;
    streamResponse?: ChatStreamHandler;
    persistenceKey?: string;
}
export declare function useChat({ initialMessage, streamResponse, persistenceKey }?: UseChatOptions): {
    messages: ChatMessage[];
    isStreaming: boolean;
    latency: number | null;
    activeStreamId: string | null;
    inputValue: string;
    setInputValue: import('../../node_modules/.pnpm/react@19.2.4/node_modules/react').Dispatch<import('../../node_modules/.pnpm/react@19.2.4/node_modules/react').SetStateAction<string>>;
    sendMessage: (content: string) => Promise<void>;
    clearHistory: () => void;
};
export {};
