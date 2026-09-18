//devuelve un arreglo nuevo
import { actividades } from "./datos.js";
import { GestorActividades } from "./gestor.js";
import { crearResumen, presentarResumen } from "./resumen.js";
import { leerActividadesJson } from "./validacion.js"; //Incremento 4: la frontera para validar el JSON

const gestor = new GestorActividades(actividades);
const actualizadas = gestor.completar(3);
console.log(presentarResumen(crearResumen(actualizadas)));
console.log("---");
console.log(presentarResumen(crearResumen(actividades)));
//Incremento 4: la frontera para validar el JSON
const texto = JSON.stringify(actividades);
const actividadesLeidas = leerActividadesJson(texto);

console.log(presentarResumen(crearResumen(gestor.completar(3))));