//Definicion de alias, interfaces y funciones tipadas para el dominio
type EstadoActividad = 'pendiente' | 'en_progreso' | 'completada';

interface Actividad {
  readonly id: number;
  titulo: string;
  estado: EstadoActividad;
  descripcion?: string;
}

function describir(actividad: Actividad): string {
  const descripcion = actividad.descripcion ?? 'Sin descripción';
  return `${actividad.titulo} (${actividad.estado}) · ${descripcion}`;
}

function marcarCompletada(actividad: Actividad): Actividad {
  return { ...actividad, estado: 'completada' };
}

const actividades: Actividad[] = [
  { id: 1, titulo: 'Revisar HTML', estado: 'completada', descripcion: 'Comprobar landmarks' },
  { id: 2, titulo: 'Practicar TypeScript', estado: 'pendiente' },
];

console.log(describir(actividades[0] ?? actividades[1]!));
console.log(describir(marcarCompletada(actividades[1]!)));
console.log(actividades[1]!.estado);