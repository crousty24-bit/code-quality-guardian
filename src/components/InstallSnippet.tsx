import { quickInstallCommand } from '../content'
import { useCopyText } from '../hooks/useCopyText'

export function InstallSnippet() {
  const { copy, copyState } = useCopyText(quickInstallCommand)
  const copyLabel =
    copyState === 'copied'
      ? 'Installation command copied'
      : copyState === 'error'
        ? 'Unable to copy installation command'
        : 'Copy installation command'

  return (
    <div className="install-snippet">
      <span className="install-prompt" aria-hidden="true">
        $
      </span>
      <code title={quickInstallCommand} translate="no">
        {quickInstallCommand}
      </code>
      <button
        className="snippet-copy-button"
        type="button"
        onClick={copy}
        aria-label={copyLabel}
        title={copyLabel}
        data-state={copyState}
      >
        <span className="copy-glyph" aria-hidden="true" />
      </button>
      <span className="sr-only" aria-live="polite">
        {copyState === 'copied'
          ? 'Copied'
          : copyState === 'error'
            ? 'Copy failed'
            : ''}
      </span>
    </div>
  )
}
