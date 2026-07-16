const rows = [
  { codigo: 'AER-01', modulo: 'AERONAVES', detalle: 'Mantenimiento programado', estado: 'OPERATIVO' },
  { codigo: 'TRP-02', modulo: 'TRIPULANTES', detalle: 'Certificaciones vigentes', estado: 'OPERATIVO' },
  { codigo: 'RSV-03', modulo: 'RESERVAS', detalle: 'Pasajeros y equipaje', estado: 'PENDIENTE' },
  { codigo: 'SES-04', modulo: 'SESIONES', detalle: 'Auditoria de accesos', estado: 'ALERTA' },
];

const estadoStyles = {
  OPERATIVO: 'text-[var(--color-active)] border-[var(--color-active)]/40 bg-[var(--color-active)]/10',
  PENDIENTE: 'text-[var(--color-signal)] border-[var(--color-signal)]/40 bg-[var(--color-signal)]/10',
  ALERTA: 'text-[var(--color-alert)] border-[var(--color-alert)]/40 bg-[var(--color-alert)]/10',
};

export function StatusBoard() {
  return (
    <div className="overflow-hidden rounded-lg border border-[var(--color-hairline)] bg-[var(--color-panel)]">
      <div className="flex items-center justify-between border-b border-[var(--color-hairline)] px-5 py-3">
        <span className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
          Panel de estado operativo
        </span>
        <span className="flex items-center gap-2 font-[var(--font-mono)] text-[11px] text-[var(--color-active)]">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--color-active)]" />
          en linea
        </span>
      </div>

      <div className="divide-y divide-[var(--color-hairline)]">
        {rows.map((row, i) => (
          <div
            key={row.codigo}
            className="flap-row grid grid-cols-[auto_1fr_auto] items-center gap-4 px-5 py-3.5"
            style={{ animationDelay: `${i * 90}ms` }}
          >
            <span className="font-[var(--font-mono)] text-xs text-[var(--color-text-muted)]">
              {row.codigo}
            </span>
            <span>
              <span className="block font-[var(--font-display)] text-sm font-semibold text-[var(--color-text-primary)]">
                {row.modulo}
              </span>
              <span className="block text-xs text-[var(--color-text-muted)]">{row.detalle}</span>
            </span>
            <span
              className={`rounded border px-2.5 py-1 font-[var(--font-mono)] text-[10px] font-medium uppercase tracking-wide ${estadoStyles[row.estado]}`}
            >
              {row.estado}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}