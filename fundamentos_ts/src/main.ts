//Representar alternativas con uniones y ausencia explícita
//type EstadoActividad = 'abierta' | 'pendiente' | 'en_progreso' | 'completada'; comentada para no tenga el estato de 'abierta' y así poder probar la función etiquetaEstado con un estado que no esté definido en el tipo EstadoActividad
type EstadoActividad = 'pendiente' | 'en_progreso' | 'completada';

function etiquetaEstado(estado: EstadoActividad): string {
//  if (estado === 'abierta') {
 //   return 'Abierta';
 // }
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

//const estados: EstadoActividad[] = ['abierta', 'pendiente', 'completada'];
const estados: EstadoActividad[] = ['pendiente', 'completada'];

console.log(etiquetaEstado('en_progreso'));
//console.log(etiquetaEstado('abierta'));
console.log(etiquetaEstado(estados[0] ?? 'pendiente'));

const encontrado = buscarEstado(estados, 'en_progreso');
if (encontrado === undefined) {
  console.log('Ninguna en ese estado');
} else {
  console.log(etiquetaEstado(encontrado));
}