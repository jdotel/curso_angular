//Dos funciones que trabajan juntas
function calcularPendientes(total: number, completadas: number): number {
  return total - completadas;
}

function calcularPorcentaje(parte: number, total: number): number {
  return (parte / total) * 100;
}

const total = 8;
const completadas = 3;

const pendientes = calcularPendientes(total, completadas);
const porcentaje = calcularPorcentaje(pendientes, total);

console.log(pendientes);
console.log(porcentaje.toFixed(1));
console.log(calcularPendientes(2, 2));