import { ChatMessage } from '../types';
/**
 * SSE stream configuration options.
 */
export interface SSEStreamOptions {
    /**
     * Base URL of the chat API endpoint.
     * @example "https://your-api.railway.app"
     */
    apiUrl: string;
    /**
     * Optional Bearer token for API authentication.
     * @example process.env.NEXT_PUBLIC_CHAT_API_TOKEN
     */
    apiToken?: string;
    /**
     * Path to the chat endpoint.
     * @default "/v1/chat"
     */
    path?: string;
    /**
     * Custom function to build the request body from the current message and history.
     * Override this to match your backend's expected payload shape.
     *
     * @default (message, history) => ({ messages: [...history, { role: 'user', content: message }] })
     */
    buildBody?: (message: string, history: ChatMessage[]) => unknown;
    /**
     * Custom function to extract the text chunk from a parsed SSE data object.
     * Override this to match your backend's streamed JSON shape.
     *
     * Defaults to OpenAI-compatible: `data.choices[0].delta.content`
     */
    extractChunk?: (data: unknown) => string | undefined;
}
/**
 * Hook providing a generic SSE-backed response adapter.
 *
 * Pass the returned `streamResponse` to `ChatWidget`'s `streamResponse` prop.
 *
 * @example
 * ```tsx
 * const { streamResponse } = useSSEStream({
 *   apiUrl: 'https://my-api.example.com',
 *   apiToken: process.env.NEXT_PUBLIC_API_TOKEN,
 * })
 *
 * return <ChatWidget streamResponse={streamResponse} />
 * ```
 */
export declare function useSSEStream({ apiUrl, apiToken, path, buildBody, extractChunk, }: SSEStreamOptions): {
    streamResponse: (message: string, history: ChatMessage[]) => AsyncGenerator<string, void, unknown>;
};
