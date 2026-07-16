import { Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { StatusBoard } from '../components/StatusBoard';

const modulos = [
  { titulo: 'Aeronaves', descripcion: 'Mantenimiento programado, historial tecnico y disponibilidad de flota.' },
  { titulo: 'Tripulantes', descripcion: 'Certificaciones vigentes, vencimientos y aptitud de vuelo.' },
  { titulo: 'Reservas y pasajeros', descripcion: 'Gestion de reservas, equipaje y tarjetas de embarque.' },
  { titulo: 'Sesiones y auditoria', descripcion: 'Registro de accesos y trazabilidad de acciones del sistema.' },
];

export function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        <section className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[1.1fr_0.9fr] md:items-center md:py-28">
          <div>
            <span className="font-[var(--font-mono)] text-xs uppercase tracking-[0.25em] text-[var(--color-signal)]">
              Torre de control &middot; SkyOps
            </span>
            <h1 className="mt-4 font-[var(--font-display)] text-4xl font-semibold leading-[1.1] text-[var(--color-text-primary)] sm:text-5xl">
              Operaciones aereas
              <br />
              bajo un solo panel.
            </h1>
            <p className="mt-5 max-w-md text-base text-[var(--color-text-muted)]">
              SkyOps centraliza aeronaves, tripulantes, reservas y auditoria de
              acceso en una sola plataforma, con control por roles para cada
              area de la operacion.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/login"
                className="rounded-md bg-[var(--color-signal)] px-5 py-2.5 font-[var(--font-mono)] text-xs font-semibold uppercase tracking-wide text-[var(--color-void)] transition hover:opacity-90"
              >
                Ingresar al panel
              </Link>
              <Link
                to="/operaciones"
                className="font-[var(--font-mono)] text-xs uppercase tracking-wide text-[var(--color-text-muted)] underline decoration-[var(--color-hairline)] underline-offset-4 transition hover:text-[var(--color-text-primary)]"
              >
                Ver operaciones publicas
              </Link>
            </div>
          </div>

          <StatusBoard />
        </section>

        <section className="border-t border-[var(--color-hairline)] bg-[var(--color-panel)]/40">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <h2 className="font-[var(--font-display)] text-xl font-semibold text-[var(--color-text-primary)]">
              Modulos del sistema
            </h2>
            <p className="mt-2 max-w-lg text-sm text-[var(--color-text-muted)]">
              Cada modulo tiene reglas de acceso propias segun el rol de la
              persona autenticada.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {modulos.map((m) => (
                <div
                  key={m.titulo}
                  className="rounded-lg border border-[var(--color-hairline)] bg-[var(--color-panel)] p-5 transition hover:border-[var(--color-signal)]/50"
                >
                  <h3 className="font-[var(--font-display)] text-sm font-semibold text-[var(--color-text-primary)]">
                    {m.titulo}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[var(--color-text-muted)]">
                    {m.descripcion}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}