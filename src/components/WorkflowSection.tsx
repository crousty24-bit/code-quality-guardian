import { workflow } from '../content'
import { Reveal } from './Reveal'

export function WorkflowSection() {
  return (
    <section className="section section-tonal" id="method">
      <div className="page-shell">
        <Reveal className="section-heading">
          <h2>Discipline before, during, and after the edit.</h2>
          <p>
            The skill turns intervention quality into a repeatable six-part workflow.
          </p>
        </Reveal>

        <ol className="workflow-list">
          {workflow.map((item) => (
            <li key={item.verb}>
              <Reveal className="workflow-step">
                <span className="workflow-marker" aria-hidden="true" />
                <h3>{item.verb}</h3>
                <p>{item.description}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

