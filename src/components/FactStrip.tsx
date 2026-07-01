import { facts } from '../content'
import { MagicBentoGrid } from './MagicBentoGrid'

export function FactStrip() {
  return (
    <section className="fact-strip" aria-label="Project facts">
      <MagicBentoGrid className="page-shell fact-grid">
        {facts.map((fact) => (
          <div className="fact magic-bento-card" key={fact.label}>
            <strong>{fact.value}</strong>
            <span>{fact.label}</span>
          </div>
        ))}
      </MagicBentoGrid>
    </section>
  )
}
