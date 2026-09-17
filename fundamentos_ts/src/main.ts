//Convertir datos entre objetos y texto JSON
//Guardar y recuperar una actividad
import type { Actividad } from "./tipos.js";

function aTexto(actividad: Actividad): string {
  return JSON.stringify(actividad);
}

function desdeTexto(texto: string): Actividad | undefined {
  const valor: unknown = JSON.parse(texto);

  if (typeof valor !== "object" || valor === null) {
    return undefined;
  }
  if (!("id" in valor) || !("titulo" in valor) || !("estado" in valor)) {
    return undefined;
  }
  if (typeof valor.id !== "number" || typeof valor.titulo !== "string") {
    return undefined;
  }

  return valor as Actividad;
}

const original: Actividad = {
  id: 1,
  titulo: "Practicar TypeScript",
  estado: "pendiente",
};
const texto = aTexto(original);

console.log(texto);
console.log(desdeTexto(texto)?.titulo ?? "Datos inválidos");
console.log(desdeTexto('{"id":"uno"}')?.titulo ?? "Datos inválidos");
