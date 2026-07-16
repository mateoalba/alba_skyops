/**
 * DRF puede responder errores en varios formatos.
 * Esta funcion los normaliza a un string legible para la UI.
 */
export function parseApiError(error) {
  const data = error?.response?.data;

  if (!data) return 'No se pudo conectar con el servidor. Intenta de nuevo.';
  if (typeof data === 'string') return data;
  if (data.detail) return data.detail;
  if (data.non_field_errors?.length) return data.non_field_errors[0];

  const firstKey = Object.keys(data)[0];
  if (firstKey && Array.isArray(data[firstKey])) {
    return `${firstKey}: ${data[firstKey][0]}`;
  }
  return 'Ocurrio un error inesperado. Intenta de nuevo.';
}