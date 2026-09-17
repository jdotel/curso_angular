//Representar objetos y actualizarlos mediante copias con spread
//Todos juntos
const actividad = {
  id: 1,
  titulo: "Practicar TypeScript",
  estado: "pendiente",
};

const actualizada = { ...actividad, estado: "completada" };

console.log(actividad.estado);
console.log(actualizada.estado);
console.log(actividad === actualizada);
console.log(actividad.titulo === actualizada.titulo);