import { isList, isNotList } from '../content'
import { MagicBentoGrid } from './MagicBentoGrid'
import { Reveal } from './Reveal'

type DefinitionListProps = {
  title: string
  items: readonly string[]
  emphasized?: boolean
}

function DefinitionList({ title, items, emphasized = false }: DefinitionListProps) {
  return (
    <div
      className={
        emphasized
          ? 'definition-column definition-primary magic-bento-card'
          : 'definition-column magic-bento-card'
      }
    >
      <h3>{title}</h3>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export function DefinitionSection() {
  return (
    <section className="section section-tonal" id="definition">
      <div className="page-shell">
        <Reveal className="section-heading section-heading-narrow">
          <h2>An intervention governor, not a checklist.</h2>
        </Reveal>

        <MagicBentoGrid reveal className="definition-grid">
          <DefinitionList title="What it is" items={isList} emphasized />
          <DefinitionList title="What it is not" items={isNotList} />
        </MagicBentoGrid>
      </div>
    </section>
  )
}
