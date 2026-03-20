import React from 'react'
import type { Preview } from '@storybook/react'
import '../src/styles/variables.css'
import '../src/styles/themes.css'
import '../src/styles/widget.css'

const preview: Preview = {
  decorators: [
    (Story) => (
      <div data-theme="dark" style={{ fontFamily: 'sans-serif' }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
