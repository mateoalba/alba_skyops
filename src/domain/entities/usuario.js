/**
 * Entidad de dominio: Usuario autenticado.
 * @param {{id: string, nombre: string, email: string, rol: string}} data
 */
export function crearUsuario({ id, nombre, email, rol }) {
  return { id, nombre, email, rol };
}