console.log("fundamentos_ts listo");
const titulo = "Preparar estructura HTML";
let cantidadPendiente = 3;
const panelVisible = true;

cantidadPendiente = 2;

console.log(titulo);
console.log(cantidadPendiente);
console.log(panelVisible);


const pendientesTexto = "3";
const pendientes = Number(pendientesTexto);
const enProgreso = 1;

const abiertas = pendientes + enProgreso;
const porcentaje = (pendientes / abiertas) * 100;

console.log(abiertas);
console.log(porcentaje);
console.log(`Pendientes: ${porcentaje.toFixed(1)} %`);


/* //Incremento 5: el recorrido completo
import { actividades } from "./datos.js";
import { GestorActividades } from "./gestor.js";
import { crearResumen, presentarResumen } from "./resumen.js";
import { leerActividadesJson } from "./validacion.js";

async function cargarActividades(): Promise<string> {
  return Promise.resolve(JSON.stringify(actividades));
}

async function iniciar(): Promise<void> {
  try {
    const texto = await cargarActividades();
    const actividadesLeidas = leerActividadesJson(texto);
    const gestor = new GestorActividades(actividadesLeidas);
    const actualizadas = gestor.completar(3);

    console.log(presentarResumen(crearResumen(actualizadas)));
  } catch (error: unknown) {
    const mensaje =
      error instanceof Error ? error.message : "Error desconocido";
    console.error(`No fue posible crear el resumen: ${mensaje}`);
  }
}

void iniciar(); */
