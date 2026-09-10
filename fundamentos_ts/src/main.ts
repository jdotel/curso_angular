//Contar y clasificar en una pasada
//Los tres, sobre la lista del panel
const titulos = ["Revisar HTML", "Practicar TypeScript", "Comprobar foco"];

const encontrado = titulos.find((titulo) => titulo.includes("TypeScript"));
const largos = titulos.filter((titulo) => titulo.length > 12);
const etiquetas = titulos.map((titulo) => `Actividad: ${titulo}`);

console.log(encontrado ?? "No encontrado");
console.log(largos.length);
console.log(etiquetas);
console.log(titulos.length);

const sinCoincidencias = titulos.filter((titulo) => titulo.includes("Angular"));
console.log(sinCoincidencias.length);