import { limitations, links } from '../content'
import { Reveal } from './Reveal'

export function StatusSection() {
  return (
    <section className="section status-section" id="status">
      <div className="page-shell">
        <Reveal className="status-grid">
          <div>
            <p className="status-label">Experimental beta</p>
            <h2>Field-tested. Still under active evaluation.</h2>
          </div>
          <div className="status-details">
            <p>
              Version 0.2.0-beta.1 reflects two field-test phases, stronger risk
              classification, Rails/Ruby and Rust/Tauri evidence support, and read-only
              script guardrails. It is not presented as a stable release.
            </p>
            <ul>
              {limitations.map((limitation) => (
                <li key={limitation}>{limitation}</li>
              ))}
            </ul>
            <a href={links.github} target="_blank" rel="noreferrer">
              Review the repository
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
