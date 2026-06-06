import { useEffect, useRef, useState } from 'react'
import { installCommand, links } from '../content'
import { Reveal } from './Reveal'

type CopyState = 'idle' | 'copied' | 'error'

function copyWithSelection(text: string) {
  const textArea = document.createElement('textarea')
  textArea.value = text
  textArea.setAttribute('readonly', '')
  textArea.style.position = 'fixed'
  textArea.style.opacity = '0'
  document.body.appendChild(textArea)
  textArea.select()
  const copied = document.execCommand('copy')
  textArea.remove()

  if (!copied) throw new Error('Copy command was rejected')
}

export function InstallSection() {
  const [copyState, setCopyState] = useState<CopyState>('idle')
  const timerRef = useRef<number | undefined>(undefined)

  useEffect(
    () => () => {
      if (timerRef.current) window.clearTimeout(timerRef.current)
    },
    [],
  )

  async function copyCommand() {
    try {
      if (navigator.clipboard?.writeText) {
        try {
          await navigator.clipboard.writeText(installCommand)
        } catch {
          copyWithSelection(installCommand)
        }
      } else {
        copyWithSelection(installCommand)
      }
      setCopyState('copied')
    } catch {
      setCopyState('error')
    }

    if (timerRef.current) window.clearTimeout(timerRef.current)
    timerRef.current = window.setTimeout(() => setCopyState('idle'), 2200)
  }

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
              onClick={copyCommand}
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
