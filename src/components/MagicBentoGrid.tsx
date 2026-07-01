import type {
  CSSProperties,
  HTMLAttributes,
  PointerEvent as ReactPointerEvent,
} from 'react'
import { Reveal } from './Reveal'

type BentoStyle = CSSProperties & {
  '--bento-x'?: string
  '--bento-y'?: string
  '--bento-spotlight-opacity'?: string
  '--bento-tilt-x'?: string
  '--bento-tilt-y'?: string
}

type MagicBentoGridProps = HTMLAttributes<HTMLDivElement> & {
  reveal?: boolean
}

function isMotionDisabled(event: ReactPointerEvent<HTMLDivElement>) {
  return (
    event.pointerType !== 'mouse' ||
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

function resetCards(container: HTMLDivElement) {
  container.style.setProperty('--bento-spotlight-opacity', '0')
  container.style.setProperty('--bento-tilt-x', '0deg')
  container.style.setProperty('--bento-tilt-y', '0deg')

  container.querySelectorAll<HTMLElement>('.magic-bento-card').forEach((card) => {
    card.style.setProperty('--bento-card-glow', '0')
  })
}

function updateCards(container: HTMLDivElement, event: ReactPointerEvent<HTMLDivElement>) {
  const containerRect = container.getBoundingClientRect()
  const x = event.clientX - containerRect.left
  const y = event.clientY - containerRect.top
  const centerX = containerRect.width / 2
  const centerY = containerRect.height / 2
  const tiltX = ((y - centerY) / Math.max(centerY, 1)) * -1.4
  const tiltY = ((x - centerX) / Math.max(centerX, 1)) * 1.4
  const cards = Array.from(container.querySelectorAll<HTMLElement>('.magic-bento-card'))
  const cardRects = cards.map((card) => ({
    card,
    rect: card.getBoundingClientRect(),
  }))

  container.style.setProperty('--bento-x', `${x}px`)
  container.style.setProperty('--bento-y', `${y}px`)
  container.style.setProperty('--bento-spotlight-opacity', '1')
  container.style.setProperty('--bento-tilt-x', `${tiltX.toFixed(3)}deg`)
  container.style.setProperty('--bento-tilt-y', `${tiltY.toFixed(3)}deg`)

  cardRects.forEach(({ card, rect }) => {
    const cardX = event.clientX - rect.left
    const cardY = event.clientY - rect.top
    const distanceFromCenter =
      Math.hypot(cardX - rect.width / 2, cardY - rect.height / 2) /
      Math.max(rect.width, rect.height, 1)
    const glow = Math.max(0, 1 - distanceFromCenter * 1.8)

    card.style.setProperty('--bento-card-x', `${cardX}px`)
    card.style.setProperty('--bento-card-y', `${cardY}px`)
    card.style.setProperty('--bento-card-glow', glow.toFixed(3))
  })
}

export function MagicBentoGrid({
  children,
  className = '',
  reveal = false,
  style,
  onPointerMove,
  onPointerLeave,
  ...props
}: MagicBentoGridProps) {
  const rootClassName = `magic-bento-grid ${className}`.trim()
  const rootStyle: BentoStyle = {
    '--bento-x': '50%',
    '--bento-y': '50%',
    '--bento-spotlight-opacity': '0',
    '--bento-tilt-x': '0deg',
    '--bento-tilt-y': '0deg',
    ...style,
  }

  function handlePointerMove(event: ReactPointerEvent<HTMLDivElement>) {
    onPointerMove?.(event)
    if (isMotionDisabled(event)) return
    updateCards(event.currentTarget, event)
  }

  function handlePointerLeave(event: ReactPointerEvent<HTMLDivElement>) {
    onPointerLeave?.(event)
    resetCards(event.currentTarget)
  }

  const rootProps = {
    ...props,
    className: rootClassName,
    style: rootStyle,
    onPointerMove: handlePointerMove,
    onPointerLeave: handlePointerLeave,
  }

  if (reveal) {
    return <Reveal {...rootProps}>{children}</Reveal>
  }

  return <div {...rootProps}>{children}</div>
}
