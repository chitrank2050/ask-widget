/**
 * Built-in demo stream — used when no `streamResponse` is provided.
 *
 * This is a word-by-word mock that simulates streaming responses.
 * Replace it by passing a real `streamResponse` prop to `<ChatWidget />`.
 */
export declare function demoStream(): AsyncGenerator<string, void, unknown>;
