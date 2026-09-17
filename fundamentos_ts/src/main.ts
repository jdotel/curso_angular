//Representar alternativas con uniones y ausencia explícita
type EstadoActividad = 'pendiente' | 'en_progreso' | 'completada';

function etiquetaEstado(estado: EstadoActividad): string {
  if (estado === 'en_progreso') {
    return 'En progreso';
  }
  if (estado === 'completada') {
    return 'Completada';
  }
  return 'Pendiente';
}

function buscarEstado(estados: EstadoActividad[], objetivo: EstadoActividad): EstadoActividad | undefined {
  return estados.find((estado) => estado === objetivo);
}

const estados: EstadoActividad[] = ['pendiente', 'completada'];

console.log(etiquetaEstado('en_progreso'));
console.log(etiquetaEstado(estados[0] ?? 'pendiente'));

const encontrado = buscarEstado(estados, 'en_progreso');
if (encontrado === undefined) {
  console.log('Ninguna en ese estado');
} else {
  console.log(etiquetaEstado(encontrado));
}