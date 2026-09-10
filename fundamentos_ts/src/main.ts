//Clasificar una actividad
const estado = "pendiente";
const prioridad = "alta";
const diasRestantes = 0;

const estaPendiente = estado === "pendiente";
const esUrgente = prioridad === "alta";
const venceHoy = diasRestantes === 0;

const requiereAtencion = estaPendiente && (esUrgente || venceHoy);
const sePuedeArchivar = !estaPendiente && !venceHoy;

console.log(estaPendiente);
console.log(venceHoy);
console.log(requiereAtencion);
console.log(sePuedeArchivar);
