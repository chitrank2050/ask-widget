/**
 * Local development preview.
 * Shows the widget in both dark and light themes side by side.
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
          <p className="app-eyebrow">ASK_WIDGET // VITE PROTOTYPE</p>
          <h1>Streaming chat UI with a compact launcher and terminal panel.</h1>
          <p className="app-copy">
            This prototype gives the widget the two core modes you described: collapsed as a
            floating trigger, and expanded as a full response surface. The assistant stream is
            mocked locally for now so the API can be wired in later without redesigning the
            interface.
          </p>

          <div className="app-pills" aria-label="Widget capabilities">
            <span>Compact mode</span>
            <span>Expanded mode</span>
            <span>Streaming replies</span>
            <span>API-ready hook</span>
          </div>
        </section>

        <section className="app-notes" aria-label="Implementation notes">
          <article className="app-card">
            <p className="app-card__label">01 // Launcher</p>
            <h2>Floating entry point</h2>
            <p>
              A fixed trigger stays visible in the corner and expands into the main chat terminal on
              demand.
            </p>
          </article>

          <article className="app-card">
            <p className="app-card__label">02 // Conversation</p>
            <h2>Stream-first layout</h2>
            <p>
              Assistant messages render token-by-token, which should map cleanly to SSE or fetch
              streaming once the backend is connected.
            </p>
          </article>

          <article className="app-card">
            <p className="app-card__label">03 // Styling</p>
            <h2>Terminal-inspired visual language</h2>
            <p>
              The panel keeps the monochrome, ops-console feel from your reference while staying
              responsive on smaller screens.
            </p>
          </article>
        </section>
      </main>

      <ChatWidget
        title="ARCHITECT_OS // TERMINAL"
        placeholder="$ run command..."
        initialMessage="Link established. Ask me to inspect architecture, summarize a codebase, or sketch the API integration path."
        defaultOpen={false}
        position="bottom-right"
        theme="dark"
      />

      {/* Dark theme — bottom right */}
      <ChatWidget theme="dark" position="bottom-right" title="Ask Chitrank" defaultOpen={false} />

      {/* Light theme — bottom left */}
      <ChatWidget theme="light" position="bottom-left" title="Ask Chitrank" defaultOpen={false} />
    </div>
  )
}

export default App
