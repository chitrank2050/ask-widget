import { ChatMessage } from '../types';
/**
 * Hook providing persistence for chat history.
 * Helps with Phase 3 — Session Persistence.
 */
export declare function useSession(id?: string, initialMessages?: ChatMessage[]): {
    messages: ChatMessage[];
    addMessage: (message: ChatMessage) => void;
    updateMessage: (id: string, update: Partial<ChatMessage>) => void;
    clearSession: () => void;
    setMessages: import('../../node_modules/.pnpm/react@19.2.4/node_modules/react').Dispatch<import('../../node_modules/.pnpm/react@19.2.4/node_modules/react').SetStateAction<ChatMessage[]>>;
};
