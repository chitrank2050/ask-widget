import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { useChat } from '../src/hooks/useChat';

describe('useChat', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should initialize with initial message', () => {
    const { result } = renderHook(() => useChat({ initialMessage: 'Welcome' }));
    expect(result.current.messages).toHaveLength(1);
    expect(result.current.messages[0].content).toBe('Welcome');
  });

  it('should handle a simple string response', async () => {
    const mockHandler = vi.fn().mockResolvedValue('Hello World');
    const { result } = renderHook(() => useChat({ streamResponse: mockHandler }));

    await act(async () => {
      await result.current.sendMessage('Hi');
    });

    expect(result.current.messages).toHaveLength(2);
    expect(result.current.messages[1].content).toBe('Hello World');
    expect(result.current.latency).toBeDefined();
  });

  it('should handle an async iterable (streaming)', async () => {
    async function* mockStream() {
      yield 'Hello ';
      yield 'Stream';
    }
    const mockHandler = vi.fn().mockReturnValue(mockStream());
    const { result } = renderHook(() => useChat({ streamResponse: mockHandler }));

    await act(async () => {
      await result.current.sendMessage('Go');
    });

    expect(result.current.messages[1].content).toBe('Hello Stream');
    expect(result.current.isStreaming).toBe(false);
  });

  it('should prevent sending while streaming', async () => {
    const mockHandler = vi.fn().mockReturnValue(new Promise(() => {})); // Never resolves
    const { result } = renderHook(() => useChat({ streamResponse: mockHandler }));

    act(() => {
      result.current.sendMessage('First');
    });

    expect(result.current.isStreaming).toBe(true);

    await act(async () => {
      await result.current.sendMessage('Second');
    });

    expect(mockHandler).toHaveBeenCalledTimes(1);
  });

  it('should handle errors in the stream', async () => {
    const mockHandler = vi.fn().mockRejectedValue(new Error('API Down'));
    const { result } = renderHook(() => useChat({ streamResponse: mockHandler }));

    await act(async () => {
      await result.current.sendMessage('Hi');
    });

    expect(result.current.messages[1].content).toContain('API Down');
    expect(result.current.isStreaming).toBe(false);
  });

  it('should clear history', () => {
    const { result } = renderHook(() => useChat({ initialMessage: 'Hi' }));

    act(() => {
      result.current.clearHistory();
    });

    expect(result.current.messages).toHaveLength(1); // Back to initial
    expect(result.current.latency).toBeNull();
  });

  it('should throw error if no handler provided', async () => {
    const { result } = renderHook(() => useChat({}));

    await act(async () => {
      await result.current.sendMessage('Hi');
    });

    expect(result.current.messages[1].content).toContain('No stream response handler');
  });
});
