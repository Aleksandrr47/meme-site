import { NavLink, Outlet } from 'react-router-dom'

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  isActive ? 'nav-link nav-link--active' : 'nav-link'

export function Layout() {
  return (
    <div className="site">
      <header className="header">
        <NavLink to="/" className="logo" end>
          <span className="logo-emoji" aria-hidden>
            😂
          </span>
          <span className="logo-text">MemeVault</span>
        </NavLink>
        <nav className="nav" aria-label="Разделы по годам">
          <NavLink to="/2025" className={navLinkClass}>
            2025
          </NavLink>
          <NavLink to="/2026" className={navLinkClass}>
            2026
          </NavLink>
        </nav>
      </header>
      <main className="main">
        <Outlet />
      </main>
      <footer className="footer">
        <p>Учебный проект · мемы для fun, не для коммерции</p>
      </footer>
    </div>
  )
}
