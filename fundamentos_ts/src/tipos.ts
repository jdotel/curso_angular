//Modulo 2 - Unidad 4
//Incremento 1: el contrato
export type EstadoActividad = "pendiente" | "en_progreso" | "completada";

export type Prioridad = "baja" | "media" | "alta";
const original: Actividad = {
  id: 1,
  titulo: "Practicar TypeScript",
  estado: "pendiente",
  prioridad: "alta",
};
export interface Actividad {
  id: number;
  titulo: string;
  estado: EstadoActividad;
  prioridad: Prioridad;
}

export interface ResumenActividades {
  total: number;
  pendientes: number;
  enProgreso: number;
  completadas: number;
  titulosPrioridadAlta: string[];
}