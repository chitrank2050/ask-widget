import type { Meta, StoryObj } from '@storybook/react'
import ChatInput from '../src/components/ChatInput'

const meta: Meta<typeof ChatInput> = {
  title: 'Widget/Sub-components/ChatInput',
  component: ChatInput,
  argTypes: {
    onChange: { action: 'changed' },
    onSubmit: { action: 'submitted' },
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Empty: Story = {
  args: {
    value: '',
    isStreaming: false,
    placeholder: 'Ask me anything...',
    latency: null,
  },
}

export const Typed: Story = {
  args: {
    value: 'Hello assistant!',
    isStreaming: false,
    placeholder: 'Ask me anything...',
    latency: 0.245,
  },
}

export const Streaming: Story = {
  args: {
    value: 'What is your purpose?',
    isStreaming: true,
    placeholder: 'Ask me anything...',
    latency: null,
  },
}
