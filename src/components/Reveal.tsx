import { useEffect, useRef, type HTMLAttributes, type ReactNode } from 'react'

type RevealProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
}

export function Reveal({ children, className = '', ...props }: RevealProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      element.classList.add('is-visible')
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      },
      { threshold: 0.15 },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={elementRef} className={`reveal ${className}`.trim()} {...props}>
      {children}
    </div>
  )
}
