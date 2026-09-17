/**
 * @typedef {import("./tipos.js").Actividad} Actividad
 */

/**
 * @param {Actividad} actividad
 * @returns {string}
 */
function aTexto(actividad) {
  return JSON.stringify(actividad);
}

/**
 * @param {string} texto
 * @returns {Actividad | undefined}
 */
function desdeTexto(texto) {
  const valor = JSON.parse(texto);

  if (typeof valor !== "object" || valor === null) {
    return undefined;
  }
  if (!("id" in valor) || !("titulo" in valor) || !("estado" in valor)) {
    return undefined;
  }
  if (
    typeof valor.id !== "number" ||
    typeof valor.titulo !== "string" ||
    typeof valor.estado !== "string"
  ) {
    return undefined;
  }

  return valor;
}

const original = {
  id: 1,
  titulo: "Practicar TypeScript",
  estado: "pendiente",
};
const texto = aTexto(original);

console.log(texto);
console.log(desdeTexto(texto)?.titulo ?? "Datos inválidos");
console.log(desdeTexto('{"id":"uno"}')?.titulo ?? "Datos inválidos");
