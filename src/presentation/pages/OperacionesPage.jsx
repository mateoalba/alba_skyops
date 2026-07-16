import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export function OperacionesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="mx-auto max-w-6xl flex-1 px-6 py-20">
        <h1 className="font-[var(--font-display)] text-3xl font-semibold text-[var(--color-text-primary)]">
          Operaciones
        </h1>
        <p className="mt-3 max-w-md text-sm text-[var(--color-text-muted)]">
          Listado publico de operaciones. Se conecta al API en el siguiente entregable.
        </p>
      </main>
      <Footer />
    </div>
  );
}