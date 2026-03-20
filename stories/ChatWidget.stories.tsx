import type { Meta, StoryObj } from '@storybook/react'
import ChatWidget from '../src/components/ChatWidget'

const meta: Meta<typeof ChatWidget> = {
  title: 'Widget/Launcher',
  component: ChatWidget,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ position: 'relative' }}>
        <style>
          {`
            .chat-widget { 
              position: relative !important; 
              bottom: auto !important;
              right: auto !important;
              left: auto !important;
              top: auto !important;
              transform: none !important;
              pointer-events: auto !important;
              display: inline-flex !important;
            }
          `}
        </style>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof meta>

export const Dark: Story = {
  args: {
    theme: 'dark',
    title: 'Ask Chitrank',
    initialMessage: 'Link established. Assistant ready to audit.',
  },
}

export const Light: Story = {
  args: {
    theme: 'light',
    title: 'Ask Chitrank',
    initialMessage: 'Link established. How can I help today?',
  },
}

export const CustomPosition: Story = {
  args: {
    position: 'bottom-left',
    title: 'Support',
  },
}

export const OpenByDefault: Story = {
  args: {
    defaultOpen: true,
  },
}
