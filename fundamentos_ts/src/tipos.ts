//Tipos de datos para la aplicación de gestión de actividades
export type EstadoActividad = "pendiente" | "en_progreso" | "completada";

export interface Actividad {
  readonly id: number;
  titulo: string;
  estado: EstadoActividad;
}
