/* eslint-disable @typescript-eslint/no-explicit-any */
import { renderHook } from '@testing-library/react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { useSSEStream } from '../src/hooks/useSSEStream';

describe('useSSEStream', () => {
  const apiUrl = 'https://api.example.com';

  beforeEach(() => {
    vi.stubGlobal('fetch', vi.fn());
  });

  it('should build the correct request with default options', async () => {
    const mockReader = {
      read: vi.fn().mockResolvedValue({ done: true, value: undefined }),
      releaseLock: vi.fn(),
    };
    const mockResponse = {
      ok: true,
      body: { getReader: () => mockReader },
    };
    (fetch as any).mockResolvedValue(mockResponse);

    const { result } = renderHook(() => useSSEStream({ apiUrl }));
    const generator = result.current.streamResponse('Hello', []);
    await generator.next();

    expect(fetch).toHaveBeenCalledWith(
      `${apiUrl}/v1/chat`,
      expect.objectContaining({
        method: 'POST',
        headers: expect.objectContaining({ 'Content-Type': 'application/json' }),
        body: JSON.stringify({
          messages: [{ role: 'user', content: 'Hello' }],
        }),
      }),
    );
  });

  it('should yield chunks from valid SSE data', async () => {
    const encoder = new TextEncoder();
    const chunks = [
      encoder.encode('data: {"choices":[{"delta":{"content":"Hello"}}]}\n'),
      encoder.encode('data: {"choices":[{"delta":{"content":" World"}}]}\n'),
      encoder.encode('data: [DONE]\n'),
    ];

    let chunkIdx = 0;
    const mockReader = {
      read: vi.fn().mockImplementation(() => {
        if (chunkIdx < chunks.length) {
          return Promise.resolve({ done: false, value: chunks[chunkIdx++] });
        }
        return Promise.resolve({ done: true });
      }),
      releaseLock: vi.fn(),
    };

    const mockResponse = {
      ok: true,
      body: { getReader: () => mockReader },
    };
    (fetch as any).mockResolvedValue(mockResponse);

    const { result } = renderHook(() => useSSEStream({ apiUrl }));
    const generator = result.current.streamResponse('Hi', []);

    const values = [];
    for await (const val of generator) {
      values.push(val);
    }

    expect(values).toEqual(['Hello', ' World']);
  });

  it('should throw error on non-ok response', async () => {
    const mockResponse = {
      ok: false,
      json: vi.fn().mockResolvedValue({ detail: 'Auth failed' }),
    };
    (fetch as any).mockResolvedValue(mockResponse);

    const { result } = renderHook(() => useSSEStream({ apiUrl }));
    const generator = result.current.streamResponse('Hi', []);

    await expect(generator.next()).rejects.toThrow('Auth failed');
  });

  it('should handle malformed JSON gracefully', async () => {
    const encoder = new TextEncoder();
    const mockReader = {
      read: vi
        .fn()
        .mockResolvedValueOnce({ done: false, value: encoder.encode('data: {invalid\n') })
        .mockResolvedValueOnce({ done: true }),
      releaseLock: vi.fn(),
    };

    const mockResponse = {
      ok: true,
      body: { getReader: () => mockReader },
    };
    (fetch as any).mockResolvedValue(mockResponse);

    const consoleSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
    const { result } = renderHook(() => useSSEStream({ apiUrl }));
    const generator = result.current.streamResponse('Hi', []);

    const values = [];
    for await (const val of generator) {
      values.push(val);
    }

    expect(values).toHaveLength(0);
    expect(consoleSpy).toHaveBeenCalled();
  });

  it('should support custom path and extractChunk', async () => {
    const encoder = new TextEncoder();
    const mockReader = {
      read: vi
        .fn()
        .mockResolvedValueOnce({ done: false, value: encoder.encode('data: {"text":"Custom"}\n') })
        .mockResolvedValueOnce({ done: true }),
      releaseLock: vi.fn(),
    };

    const mockResponse = {
      ok: true,
      body: { getReader: () => mockReader },
    };
    (fetch as any).mockResolvedValue(mockResponse);

    const { result } = renderHook(() =>
      useSSEStream({
        apiUrl,
        path: '/custom',

        extractChunk: (data: any) => data.text,
      }),
    );

    const generator = result.current.streamResponse('Hi', []);
    const { value } = await generator.next();

    expect(fetch).toHaveBeenCalledWith(`${apiUrl}/custom`, expect.anything());
    expect(value).toBe('Custom');
  });
});
