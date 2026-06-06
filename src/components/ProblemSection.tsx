import { problems } from '../content'
import { Reveal } from './Reveal'

export function ProblemSection() {
  return (
    <section className="section" id="problem">
      <div className="page-shell">
        <Reveal className="section-heading">
          <h2>Coding agents often solve beyond the problem.</h2>
          <p>
            Plausible code can still be the wrong intervention when it expands scope,
            ignores local conventions, or claims checks that never ran.
          </p>
        </Reveal>

        <div className="problem-list">
          {problems.map((problem, index) => (
            <Reveal className={`problem-item problem-item-${index + 1}`} key={problem.title}>
              <span className="problem-index" aria-hidden="true">
                0{index + 1}
              </span>
              <div>
                <h3>{problem.title}</h3>
                <p>{problem.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

