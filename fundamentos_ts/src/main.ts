function calcularPendientes(total: number, completadas: number): number {
  return total - completadas;
}

const pendientes = calcularPendientes(8, 3);
console.log(pendientes);