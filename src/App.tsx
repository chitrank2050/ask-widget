/**
 * Local development preview.
 * This file is NOT included in the published package.
 */

import ChatWidget from './components/ChatWidget'
import './App.css'

function App() {
  return (
    <div className="app-shell">
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
    </div>
  )
}

export default App
