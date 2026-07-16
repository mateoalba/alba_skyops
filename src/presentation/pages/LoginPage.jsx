export function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--color-void)] px-6">
      <div className="w-full max-w-sm rounded-lg border border-[var(--color-hairline)] bg-[var(--color-panel)] p-8 text-center">
        <span className="font-[var(--font-mono)] text-xs uppercase tracking-[0.2em] text-[var(--color-signal)]">
          SkyOps
        </span>
        <h1 className="mt-2 font-[var(--font-display)] text-xl font-semibold text-[var(--color-text-primary)]">
          Acceso al panel
        </h1>
        <p className="mt-3 text-sm text-[var(--color-text-muted)]">
          El formulario de login contra el API se implementa en el siguiente entregable.
        </p>
      </div>
    </div>
  );
}