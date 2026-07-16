import { Link, NavLink } from 'react-router-dom';

const links = [
  { to: '/', label: 'Inicio' },
  { to: '/operaciones', label: 'Operaciones' },
  { to: '/contacto', label: 'Contacto' },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-hairline)] bg-[var(--color-void)]/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-[var(--font-display)] text-lg font-semibold tracking-tight text-[var(--color-text-primary)]">
            SKY<span className="text-[var(--color-signal)]">OPS</span>
          </span>
          <span className="hidden font-[var(--font-mono)] text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-muted)] sm:inline">
            control de operaciones
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                [
                  'text-sm transition',
                  isActive
                    ? 'text-[var(--color-signal)]'
                    : 'text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)]',
                ].join(' ')
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/login"
          className="rounded-md border border-[var(--color-hairline)] bg-[var(--color-panel)] px-4 py-2 font-[var(--font-mono)] text-xs font-medium uppercase tracking-wide text-[var(--color-text-primary)] transition hover:border-[var(--color-signal)] hover:text-[var(--color-signal)]"
        >
          Acceder
        </Link>
      </div>
    </header>
  );
}