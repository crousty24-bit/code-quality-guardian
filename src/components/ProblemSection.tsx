import { problems } from '../content'
import { MagicBentoGrid } from './MagicBentoGrid'
import { Reveal } from './Reveal'

export function ProblemSection() {
  return (
    <section className="section" id="problem">
      <div className="page-shell">
        <Reveal className="section-heading">
          <h2>The failure mode is undisciplined intervention.</h2>
          <p>
            Guardian treats agent overproduction as an engineering risk: extra files,
            foreign architecture, hidden behavior changes, and unsupported verification.
          </p>
        </Reveal>

        <MagicBentoGrid className="problem-list">
          {problems.map((problem, index) => (
            <Reveal
              className={`problem-item problem-item-${index + 1} magic-bento-card`}
              key={problem.title}
            >
              <span className="problem-index" aria-hidden="true">
                0{index + 1}
              </span>
              <div>
                <h3>{problem.title}</h3>
                <p>{problem.description}</p>
              </div>
            </Reveal>
          ))}
        </MagicBentoGrid>
      </div>
    </section>
  )
}
