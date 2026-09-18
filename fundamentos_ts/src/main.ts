import { actividades } from "./datos.js";
import { crearResumen, presentarResumen } from "./resumen.js";

console.log(presentarResumen(crearResumen(actividades)));
