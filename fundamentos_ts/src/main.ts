//Modulo2 - Unidad 4 - Esperar una promesa con async y await
//Cargar dos cosas, bien y mal
function cargar(nombre: string, exito: boolean): Promise<string> {
  return new Promise((cumplir, rechazar) => {
    setTimeout(() => {
      if (exito) {
        cumplir(`${nombre} listo`);
      } else {
        rechazar(new Error(`${nombre} falló`));
      }
    }, 300);
  });
}

async function iniciar(): Promise<void> {
  console.log("1. inicio");

  try {
    const [actividades, usuarios] = await Promise.all([
      cargar("actividades", true),
      cargar("usuarios", true),
    ]);
    console.log(`2. ${actividades}`);
    console.log(`3. ${usuarios}`);

    await cargar("comentarios", false);
    console.log("no se llega aquí");
  } catch (error: unknown) {
    const mensaje = error instanceof Error ? error.message : "desconocido";
    console.log(`4. ${mensaje}`);
  } finally {
    console.log("5. terminado");
  }
}

iniciar();
