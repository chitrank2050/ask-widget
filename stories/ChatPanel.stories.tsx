import type { Meta, StoryObj } from '@storybook/react'
import ChatPanel from '../src/components/ChatPanel'

const meta: Meta<typeof ChatPanel> = {
  title: 'Widget/Sub-components/ChatPanel',
  component: ChatPanel,
  argTypes: {
    onInputChange: { action: 'inputChanged' },
    onSubmit: { action: 'submitted' },
    onCollapse: { action: 'collapsed' },
    onReset: { action: 'reset' },
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

const mockMessages = [
  {
    id: '1',
    role: 'assistant' as const,
    content: 'Hello! I am your AI assistant. How can I help you today?',
    timestamp: new Date(),
  },
  {
    id: '2',
    role: 'user' as const,
    content: 'What is your name?',
    timestamp: new Date(),
  },
  {
    id: '3',
    role: 'assistant' as const,
    content: 'I am the Ask Chitrank widget, a RAG-powered chatbot.',
    timestamp: new Date(),
  },
]

export const Default: Story = {
  args: {
    title: 'Ask Chitrank',
    messages: mockMessages,
    activeStreamId: null,
    isStreaming: false,
    inputValue: '',
    placeholder: 'Ask me anything...',
    latency: 0.15,
  },
}

export const Streaming: Story = {
  args: {
    ...Default.args,
    messages: [
      ...mockMessages,
      {
        id: '4',
        role: 'assistant' as const,
        content: 'I am currently thinking about your question...',
        timestamp: new Date(),
      },
    ],
    activeStreamId: '4',
    isStreaming: true,
    latency: null,
  },
}

export const Empty: Story = {
  args: {
    ...Default.args,
    messages: [],
  },
}
