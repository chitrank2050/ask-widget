/**
 * Local development preview.
 * This file is NOT included in the published package.
 */

import ChatWidget from './components/ChatWidget'
import './App.css'

function App() {
  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="app-header__logo">ASK_WIDGET</div>
        <nav className="app-header__nav">
          <a href="https://github.com/chitrank2050/ask-widget" target="_blank" rel="noreferrer">
            SOURCE_CODE
          </a>
          <a href="/docs" className="app-header__btn">
            DOCUMENTATION
          </a>
        </nav>
      </header>

      <div className="app-shell__glow app-shell__glow--left" />
      <div className="app-shell__glow app-shell__glow--right" />

      <main className="app-layout">
        <section className="app-hero">
          <p className="app-eyebrow">ASK_WIDGET // DEV_PREVIEW</p>
          <h1>Drop-in AI chat for your developer portfolio.</h1>
          <p className="app-copy">
            A production-ready React component with token-streaming, monochrome aesthetics, and
            responsive layout. Aligned with the neutral zinc palette of your personal portfolio.
          </p>

          <div className="app-pills" aria-label="Widget capabilities">
            <span>SSE Streaming</span>
            <span>Zero Global CSS</span>
            <span>Mobile Ready</span>
            <span>Zinc Palette</span>
          </div>
        </section>

        <section className="app-notes" aria-label="Next steps">
          <article className="app-card">
            <p className="app-card__label">PHASE_06</p>
            <h2>Production Ready</h2>
            <p>
              The package system is initialized. Once the backend is connected, swap the demo stream
              for the production API hook.
            </p>
          </article>

          <article className="app-card">
            <p className="app-card__label">CUSTOMIZATION</p>
            <h2>Fully Configurable</h2>
            <p>
              Adjust positions, themes, and initial messages directly through props. The style
              system is isolated to prevent leakage.
            </p>
          </article>
        </section>
      </main>

      {/* Primary preview widget — Dark Theme */}
      <ChatWidget theme="dark" position="bottom-right" title="Ask Chitrank" defaultOpen={false} />

      {/* Secondary preview — Light Theme for testing */}
      <ChatWidget
        theme="light"
        position="bottom-left"
        title="Ask Chitrank (Light)"
        placeholder="Testing light mode..."
        defaultOpen={false}
      />
      <footer className="app-footer">
        <div className="app-footer__wrap">
          <p>© 2026 CHITRANK AGNIHOTRI // ALL_RIGHTS_RESERVED</p>
          <div className="app-footer__meta">
            <span>VERSION: 0.1.0-STABLE</span>
            <span className="app-footer__status">SYSTEM_LIVE</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
