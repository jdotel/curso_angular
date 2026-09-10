// Todo junto en un solo archivo para que sea más fácil de ejecutar y probar
function obtenerPrimerTitulo(titulos: string[]): string {
  if (titulos.length === 0) {
    return "Sin actividades";
  }
  return titulos[0] ?? "Sin actividades";
}

function describirCantidad(titulos: string[]): string {
  if (titulos.length === 0) {
    return "No hay actividades todavía";
  }
  if (titulos.length === 1) {
    return "Hay 1 actividad";
  }
  return `Hay ${titulos.length} actividades`;
}

const conDatos = ["Revisar contraste", "Practicar TypeScript"];
const vacia: string[] = [];

console.log(obtenerPrimerTitulo(conDatos));
console.log(obtenerPrimerTitulo(vacia));
console.log(describirCantidad(conDatos));
console.log(describirCantidad(vacia));
console.log(describirCantidad(["Sola"]));
