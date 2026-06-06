import { links } from '../content'

const navItems = [
  { href: '#method', label: 'Method' },
  { href: '#risk', label: 'Risk levels' },
  { href: '#install', label: 'Install' },
] as const

export function Header() {
  return (
    <header className="site-header">
      <div className="page-shell flex h-16 items-center justify-between gap-6">
        <a className="brand-link" href="#top" aria-label="Code Quality Guardian home">
          <img src="/logo-96.webp" alt="" width="36" height="36" />
          <span>Code Quality Guardian</span>
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a className="nav-link" href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a
          className="button button-secondary min-h-11"
          href={links.github}
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </div>
    </header>
  )
}
