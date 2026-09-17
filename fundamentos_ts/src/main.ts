//Comparar inferencia y anotaciones explícitas

const titulo = 'Practicar TypeScript';
const prioridades: string[] = [];

function crearEtiqueta(texto: string, cantidad: number): string {
  return `${texto}: ${cantidad}`;
}

prioridades.push('alta');
prioridades.push('media');
prioridades.push('baja');

console.log(titulo);
console.log(crearEtiqueta('Pendientes', prioridades.length));
console.log(prioridades);
