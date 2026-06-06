import { useEffect, useRef, useState } from 'react'

export type CopyState = 'idle' | 'copied' | 'error'

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

export function useCopyText(text: string) {
  const [copyState, setCopyState] = useState<CopyState>('idle')
  const timerRef = useRef<number | undefined>(undefined)

  useEffect(
    () => () => {
      if (timerRef.current) window.clearTimeout(timerRef.current)
    },
    [],
  )

  async function copy() {
    try {
      if (navigator.clipboard?.writeText) {
        try {
          await navigator.clipboard.writeText(text)
        } catch {
          copyWithSelection(text)
        }
      } else {
        copyWithSelection(text)
      }
      setCopyState('copied')
    } catch {
      setCopyState('error')
    }

    if (timerRef.current) window.clearTimeout(timerRef.current)
    timerRef.current = window.setTimeout(() => setCopyState('idle'), 2200)
  }

  return { copy, copyState }
}

