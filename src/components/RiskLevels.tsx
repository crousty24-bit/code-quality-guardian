import { riskLevels } from '../content'
import { Reveal } from './Reveal'

export function RiskLevels() {
  return (
    <section className="section" id="risk">
      <div className="page-shell">
        <Reveal className="section-heading">
          <h2>Scope stays owned at every risk level.</h2>
          <p>
            File count alone does not define risk. Contracts, execution hazards, and
            verification needs do.
          </p>
        </Reveal>

        <div className="risk-list">
          {riskLevels.map((risk) => (
            <Reveal className="risk-row" key={risk.level}>
              <span className="risk-level">{risk.level}</span>
              <div>
                <h3>{risk.name}</h3>
                <p>{risk.description}</p>
              </div>
              <strong>{risk.decision}</strong>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

