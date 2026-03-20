import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import ChatButton from '../src/components/ChatButton'

describe('ChatButton', () => {
  it('renders the launcher with a accessible title', () => {
    render(<ChatButton title="Ask Chitrank" onClick={() => {}} />)
    expect(screen.getByLabelText(/Open Ask Chitrank/i)).toBeInTheDocument()
  })

  it('calls onClick when pressed', () => {
    const onClick = vi.fn()
    render(<ChatButton title="Test" onClick={onClick} />)

    fireEvent.click(screen.getByRole('button'))
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('renders the notification dot', () => {
    const { container } = render(<ChatButton title="Test" onClick={() => {}} />)
    const dot = container.querySelector('.chat-widget__launcher-dot')
    expect(dot).toBeInTheDocument()
  })
})
