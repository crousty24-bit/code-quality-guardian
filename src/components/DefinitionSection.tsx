import { isList, isNotList } from '../content'
import { Reveal } from './Reveal'

type DefinitionListProps = {
  title: string
  items: readonly string[]
  emphasized?: boolean
}

function DefinitionList({ title, items, emphasized = false }: DefinitionListProps) {
  return (
    <div className={emphasized ? 'definition-column definition-primary' : 'definition-column'}>
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
          <h2>Scope control, not a universal quality checklist.</h2>
        </Reveal>

        <Reveal className="definition-grid">
          <DefinitionList title="What it is" items={isList} emphasized />
          <DefinitionList title="What it is not" items={isNotList} />
        </Reveal>
      </div>
    </section>
  )
}

