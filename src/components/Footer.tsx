import { links } from '../content'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-shell footer-grid">
        <div className="footer-brand">
          <img src="/logo.png" alt="" width="32" height="32" />
          <span>Code Quality Guardian</span>
        </div>
        <div className="footer-links">
          <a href={links.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={links.skills} target="_blank" rel="noreferrer">
            skills.sh
          </a>
          <a href={links.readme} target="_blank" rel="noreferrer">
            README
          </a>
        </div>
        <p>MIT licensed. Built for careful intervention.</p>
      </div>
    </footer>
  )
}

