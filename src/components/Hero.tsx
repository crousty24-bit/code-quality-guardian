import { links } from '../content'

export function Hero() {
  return (
    <section id="top" className="hero-section">
      <div className="page-shell hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Agent Skill for existing codebases</p>
          <h1>Make coding agents change less, but better.</h1>
          <p className="hero-summary">
            Constrain scope, preserve intended behavior, and report verification honestly.
          </p>
          <a
            className="button button-primary min-h-12"
            href={links.github}
            target="_blank"
            rel="noreferrer"
          >
            View on GitHub
          </a>
        </div>

        <div className="hero-visual" aria-label="Code Quality Guardian owl logo">
          <div className="logo-frame">
            <img
              src="/logo.png"
              alt="Code Quality Guardian owl holding a code shield"
              width="1254"
              height="1254"
              fetchPriority="high"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

