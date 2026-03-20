/**
 * Local development & Demo preview.
 * This file is NOT included in the published package.
 */

import { ChatWidget } from './index'
import './App.css'

function App() {
  const token = import.meta.env.VITE_CHAT_API_TOKEN || 'your-token-here'

  return (
    <div className="app-shell">
      {/* Premium Header */}
      <header className="app-header">
        <div className="app-header__logo">
          <span>●</span> ASK_WIDGET
        </div>
        <nav className="app-header__nav">
          <a href="https://chitrank2050.github.io/ask-widget/" target="_blank" rel="noreferrer">
            DOCUMENTATION
          </a>
          <a
            href="https://chitrank2050.github.io/ask-widget/storybook/"
            target="_blank"
            rel="noreferrer"
          >
            STORYBOOK
          </a>
          <a
            href="https://www.npmjs.com/package/@chitrank2050/ask-widget"
            target="_blank"
            rel="noreferrer"
            className="app-header__npm"
          >
            NPM_v0.5.2
          </a>
          <a
            href="https://github.com/chitrank2050/ask-widget"
            target="_blank"
            rel="noreferrer"
            className="app-header__github"
          >
            <svg height="20" viewBox="0 0 16 16" width="20">
              <path
                fill="currentColor"
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
              ></path>
            </svg>
          </a>
        </nav>
      </header>

      <div className="app-shell__glow app-shell__glow--left" />
      <div className="app-shell__glow app-shell__glow--right" />

      <main className="app-layout">
        <section className="app-hero">
          <p className="app-eyebrow">ASK_WIDGET // PRODUCTION_RELEASE</p>
          <h1>Minimalist AI chat for your developer portfolio.</h1>
          <p className="app-copy">
            A lightweight, streaming-first chat component designed for the modern developer. Styled
            with the neutral zinc aesthetic and optimized for performance.
          </p>

          <div className="app-actions">
            <button
              className="app-btn-primary"
              onClick={() =>
                window.open('https://chitrank2050.github.io/ask-widget/getting-started')
              }
            >
              GET STARTED
            </button>
            <div className="app-command">
              <code>pnpm add @chitrank2050/ask-widget</code>
              <button
                className="app-copy-btn"
                onClick={() => {
                  navigator.clipboard.writeText('pnpm add @chitrank2050/ask-widget')
                  const btn = document.querySelector('.app-copy-btn')
                  if (btn) {
                    btn.classList.add('copied')
                    setTimeout(() => btn.classList.remove('copied'), 2000)
                  }
                }}
                title="Copy to clipboard"
              >
                <svg
                  fill="none"
                  height="16"
                  viewBox="0 0 24 24"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 4H8C6.89543 4 6 4.89543 6 6V18C6 19.1046 6.89543 20 8 20H16C17.1046 20 18 19.1046 18 18V6C18 4.89543 17.1046 4 16 4Z"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                  <path
                    d="M8 8H16"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                  <path
                    d="M8 12H16"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                  <path
                    d="M8 16H12"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </button>
            </div>
          </div>
        </section>

        <section className="app-notes" aria-label="Key Features">
          <article className="app-card">
            <p className="app-card__label">CORE_01</p>
            <h2>Streaming AI</h2>
            <p>
              Built-in support for Server-Sent Events (SSE). Experience real-time token streaming
              just like ChatGPT.
            </p>
          </article>

          <article className="app-card">
            <p className="app-card__label">DESIGN_02</p>
            <h2>Monochrome UI</h2>
            <p>
              Zero-config styling that aligns perfectly with the popular neutral/zinc palette of
              modern portfolios.
            </p>
            <div style={{ marginTop: '20px' }}>
              <a href="https://ko-fi.com/D1D71U581P" target="_blank" rel="noreferrer">
                <img
                  height="36"
                  style={{ border: '0px', height: '36px' }}
                  src="https://storage.ko-fi.com/cdn/kofi6.png?v=6"
                  alt="Buy Me a Coffee at ko-fi.com"
                />
              </a>
            </div>
          </article>
        </section>
      </main>

      <ChatWidget
        apiToken={token}
        title="Chitrank's AI"
        placeholder="Ask me about this project..."
        labels={{
          systemStatus: 'Online',
        }}
      />

      <footer className="app-footer">
        <div className="app-footer__wrap">
          <p>© 2026 CHITRANK AGNIHOTRI // ALL_RIGHTS_RESERVED</p>
          <div className="app-footer__meta">
            <span>VERSION: 0.5.2-STABLE</span>
            <span className="app-footer__status">RELEASED</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
