import { Component, computed, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormField, form, maxLength, minLength, required, validate } from '@angular/forms/signals';
import { LIMITES, Prioridad } from '../../modelos/actividad/actividad';
import { ActividadesService, DatosNuevaActividad } from '../actividades';

interface NuevaActividad {
  titulo: string;
  descripcion: string;
  prioridad: Prioridad;
}

interface FormularioActividadModelo {
  titulo: string;
  descripcion: string;
  prioridad: Prioridad;
}

const VACIO: FormularioActividadModelo = {
  titulo: '',
  descripcion: '',
  prioridad: 'media',
};

function aDatos(modelo: FormularioActividadModelo): DatosNuevaActividad {
  return {
    titulo: modelo.titulo.trim(),
    descripcion: modelo.descripcion.trim(),
    prioridad: modelo.prioridad,
  };
}

@Component({
  imports: [FormField, RouterLink],
  //imports: [FormField],
  selector: 'app-formulario-actividad',
  templateUrl: './formulario-actividad.html',
  styleUrl: './formulario-actividad.css',
})
export class FormularioActividad {
  private readonly servicio = inject(ActividadesService);
  protected readonly limites = LIMITES;
  private readonly router = inject(Router);

  protected readonly modelo = signal<FormularioActividadModelo>({ ...VACIO });

  protected readonly enviando = signal(false);
  protected readonly errorEnvio = signal('');



  /* protected readonly modelo = signal<NuevaActividad>({
    titulo: '',
    descripcion: '',
    prioridad: 'media',
  }); */

  //protected readonly f = form(this.modelo);
  protected readonly f = form(this.modelo, (campo) => {
    required(campo.titulo, { message: 'El título es obligatorio.' });

    minLength(campo.titulo, LIMITES.tituloMin, {
      message: `El título necesita al menos ${LIMITES.tituloMin} caracteres.`,
    });

    maxLength(campo.titulo, LIMITES.tituloMax, {
      message: `El título no puede pasar de ${LIMITES.tituloMax} caracteres.`,
    });

    validate(campo.titulo, ({ value }) =>
      value().length > 0 && value().trim().length === 0
        ? { kind: 'soloEspacios', message: 'El título no puede ser solo espacios.' }
        : null,
    );

    maxLength(campo.descripcion, LIMITES.descripcionMax, {
      message: `La descripción no puede pasar de ${LIMITES.descripcionMax} caracteres.`,
    });
  });

  protected readonly errorTitulo = computed(
    () => this.f.titulo().touched() && !this.f.titulo().valid(),
  );

  protected readonly restantes = computed(
    () => this.limites.tituloMax - this.modelo().titulo.length,
  );

  //private readonly router = inject(Router);
  //private readonly router = inject(RouterLink);

  protected readonly error = signal('');

  //protected crear(evento: Event): void {
  //  evento.preventDefault();
  //}

  protected async crear(evento: Event): Promise<void> {
    evento.preventDefault();

    const { titulo, prioridad } = this.modelo();
    this.servicio.crear(titulo, prioridad);

    const creada = this.servicio.crear(titulo, prioridad);

    if (!creada) {
      this.error.set('El título debe tener entre 3 y 80 caracteres y no repetirse.');
      return;
    }

    this.router.navigate(['/actividades', creada.id], { replaceUrl: true });


  }



  /* protected crear(titulo: string, prioridad: Prioridad): void {
    const creada = this.servicio.crear(titulo, prioridad);

    if (!creada) {
      this.error.set('El título debe tener entre 3 y 80 caracteres y no repetirse.');
      return;
    }

    this.router.navigate(['/actividades', creada.id], { replaceUrl: true });
  } */
}
