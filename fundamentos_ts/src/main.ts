//Contar y clasificar en una pasada
function resumirEstados(estados: string[]): string {
  let pendientes = 0;
  let completadas = 0;
  let otras = 0;

  for (const estado of estados) {
    if (estado === "pendiente") {
      pendientes = pendientes + 1;
    } else if (estado === "completada") {
      completadas = completadas + 1;
    } else {
      otras = otras + 1;
    }
  }

  return `${pendientes} pendientes · ${completadas} completadas · ${otras} otras`;
}

console.log(
  resumirEstados(["pendiente", "completada", "pendiente", "en progreso"]),
);
console.log(resumirEstados([]));