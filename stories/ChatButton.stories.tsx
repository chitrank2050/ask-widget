import type { Meta, StoryObj } from '@storybook/react'
import ChatButton from '../src/components/ChatButton'

const meta: Meta<typeof ChatButton> = {
  title: 'Widget/Sub-components/ChatButton',
  component: ChatButton,
  argTypes: {
    onClick: { action: 'clicked' },
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Ask Chitrank',
  },
}
