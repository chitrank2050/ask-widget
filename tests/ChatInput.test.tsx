import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import ChatInput from '../src/components/ChatInput'

describe('ChatInput', () => {
  it('updates the value on change', () => {
    const onChange = vi.fn()
    render(
      <ChatInput
        value=""
        onChange={onChange}
        onSubmit={() => {}}
        isStreaming={false}
        placeholder="Ask me anything"
        latency={null}
      />
    )

    const input = screen.getByPlaceholderText(/Ask me anything/i)
    fireEvent.change(input, { target: { value: 'howdy' } })
    expect(onChange).toHaveBeenCalledWith('howdy')
  })

  it('submits when enter is pressed', () => {
    const onSubmit = vi.fn((e) => e.preventDefault())
    render(
      <ChatInput
        value="testing"
        onChange={() => {}}
        onSubmit={onSubmit}
        isStreaming={false}
        placeholder="test"
        latency={null}
      />
    )

    const form = screen.getByRole('form')
    fireEvent.submit(form)
    expect(onSubmit).toHaveBeenCalled()
  })

  it('disables the input when streaming', () => {
    render(
      <ChatInput
        value=""
        onChange={() => {}}
        onSubmit={() => {}}
        isStreaming={true}
        placeholder="test"
        latency={null}
      />
    )
    const input = screen.getByPlaceholderText(/Streaming response/i)
    expect(input).toBeDisabled()
  })

  it('shows latency when provided', () => {
    render(
      <ChatInput
        value=""
        onChange={() => {}}
        onSubmit={() => {}}
        isStreaming={false}
        placeholder="test"
        latency={0.8}
      />
    )
    expect(screen.getByText(/LATENCY: 0.800s/i)).toBeInTheDocument()
  })
})
