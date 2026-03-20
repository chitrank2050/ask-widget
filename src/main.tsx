/**
 * Development entry point.
 * Mounts the App component for local preview only.
 * This file is NOT included in the published package — only src/index.ts is.
 */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

import './styles/variables.css'
import './styles/themes.css'
import './styles/widget.css'

const root = document.getElementById('root')
if (!root) throw new Error('Root element not found')

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>
)
