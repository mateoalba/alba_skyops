export function Footer() {
  return (
    <footer className="border-t border-[var(--color-hairline)] py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 text-sm text-[var(--color-text-muted)] sm:flex-row sm:items-center">
        <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.2em]">
          SkyOps &middot; Sistema de gestion de operaciones aereas
        </p>
        <p>Proyecto academico &middot; API Django + React</p>
      </div>
    </footer>
  );
}