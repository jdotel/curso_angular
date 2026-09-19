import type { Actividad } from "./tipos.js";

export function aTexto(actividad: Actividad): string {
  return JSON.stringify(actividad);
}

export function desdeTexto(texto: string): Actividad | undefined {
  const valor: unknown = JSON.parse(texto);

  if (typeof valor !== "object" || valor === null) {
    return undefined;
  }
  if (
    !("id" in valor) ||
    !("titulo" in valor) ||
    !("estado" in valor) ||
    !("prioridad" in valor)
  ) {
    return undefined;
  }
  if (
    typeof valor.id !== "number" ||
    typeof valor.titulo !== "string" ||
    typeof valor.estado !== "string" ||
    typeof valor.prioridad !== "string"
  ) {
    return undefined;
  }

  return valor as Actividad;
}

export function crearEtiqueta(actividad: Actividad): string {
  return JSON.stringify(actividad);
}

const original: Actividad = {
  id: 1,
  titulo: "Practicar TypeScript",
  estado: "pendiente",
  prioridad: "alta",
};
const texto = aTexto(original);

console.log(texto);
console.log(desdeTexto(texto)?.titulo ?? "Datos inválidos");
console.log(desdeTexto('{"id":"uno"}')?.titulo ?? "Datos inválidos");
