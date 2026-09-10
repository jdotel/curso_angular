//Elegir caminos con if, else if y else
//La cadena que sale bien
function describirPrioridad(nivel: number): string {
  if (nivel >= 8) {
    return "alta";
  } else if (nivel >= 4) {
    return "media";
  } else {
    return "baja";
  }
}

console.log(describirPrioridad(9));
console.log(describirPrioridad(8));
console.log(describirPrioridad(4));
console.log(describirPrioridad(3));
console.log(describirPrioridad(0));