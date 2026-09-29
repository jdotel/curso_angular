export type Prioridad = 'baja' | 'media' | 'alta'; // nuevo

export interface Actividad {
  readonly id: number;
  titulo: string;
  estado: EstadoActividad;
  prioridad: Prioridad; // nuevo
  creadaEn: string; // nuevo, en formato 2026-08-10
}
