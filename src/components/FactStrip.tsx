import { facts } from '../content'

export function FactStrip() {
  return (
    <section className="fact-strip" aria-label="Project facts">
      <div className="page-shell fact-grid">
        {facts.map((fact) => (
          <div className="fact" key={fact.label}>
            <strong>{fact.value}</strong>
            <span>{fact.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

