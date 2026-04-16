import { NavLink } from 'react-router-dom'

const LINKS = [
  { to: '/', label: 'Official Letter', end: true },
  { to: '/mission-updates', label: 'Mission Updates' },
  { to: '/dossier', label: 'Dossier', ariaLabel: 'Dossier, about' },
]

export default function SiteNav() {
  return (
    <nav className="site-nav" aria-label="Primary">
      <ul className="site-nav__list">
        {LINKS.map(({ to, label, end, ariaLabel }) => (
          <li key={to}>
            <NavLink
              to={to}
              end={end}
              aria-label={ariaLabel}
              className={({ isActive }) =>
                `site-nav__link${isActive ? ' site-nav__link--active' : ''}`
              }
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
