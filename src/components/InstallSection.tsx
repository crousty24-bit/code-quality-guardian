import { installCommand, links } from '../content'
import { useCopyText } from '../hooks/useCopyText'
import { Reveal } from './Reveal'

export function InstallSection() {
  const { copy, copyState } = useCopyText(installCommand)

  const copyLabel =
    copyState === 'copied' ? 'Copied' : copyState === 'error' ? 'Copy failed' : 'Copy'

  return (
    <section className="section" id="install">
      <div className="page-shell install-grid">
        <Reveal className="install-copy">
          <h2>Install it where scope discipline matters.</h2>
          <p>
            Add the skill to the current project for Codex, then invoke it explicitly
            with <code>$code-quality-guardian</code>.
          </p>
          <div className="link-row">
            <a href={links.skills} target="_blank" rel="noreferrer">
              skills.sh
            </a>
            <a href={links.readme} target="_blank" rel="noreferrer">
              Read the documentation
            </a>
          </div>
        </Reveal>

        <Reveal className="command-panel">
          <div className="command-header">
            <span>Install for Codex</span>
            <button
              className="copy-button"
              type="button"
              onClick={copy}
              aria-live="polite"
            >
              {copyLabel}
            </button>
          </div>
          <pre>
            <code>{installCommand}</code>
          </pre>
        </Reveal>
      </div>
    </section>
  )
}
