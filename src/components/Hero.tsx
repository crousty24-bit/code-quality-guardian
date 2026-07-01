import { links } from '../content'
import { InstallSnippet } from './InstallSnippet'

export function Hero() {
  return (
    <section id="top" className="hero-section">
      <div className="page-shell hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Agent Skill for existing codebases</p>
          <h1>Govern how coding agents change code.</h1>
          <p className="hero-summary">
            Inspect first, classify risk, bound the diff, and report verification honestly.
          </p>
        </div>

        <div className="hero-visual" aria-label="Code Quality Guardian owl logo">
          <div className="logo-frame">
            <img
              src="/logo-1000.webp"
              srcSet="/logo-480.webp 480w, /logo-1000.webp 1000w"
              sizes="(max-width: 400px) 56vw, (max-width: 767px) 224px, (max-width: 1200px) 40vw, 500px"
              alt="Code Quality Guardian owl holding a code shield"
              width="1000"
              height="1000"
              fetchPriority="high"
            />
          </div>
        </div>

        <div className="hero-actions">
          <a
            className="button button-primary min-h-12"
            href={links.github}
            target="_blank"
            rel="noreferrer"
          >
            View on GitHub
          </a>
          <InstallSnippet />
        </div>
      </div>
    </section>
  )
}
