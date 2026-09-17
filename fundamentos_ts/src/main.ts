//Conectar módulos mediante exportaciones e importaciones
import type { Actividad } from "./tipos.js";
import { crearEtiqueta } from "./etiquetas.js";

const actividades: Actividad[] = [
  { id: 1, titulo: "Revisar HTML", estado: "completada" },
  { id: 2, titulo: "Practicar TypeScript", estado: "pendiente" },
];

for (const actividad of actividades) {
  console.log(crearEtiqueta(actividad));
}
