import { Component, computed, effect, inject, input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

import { ActividadesService } from '../actividades';
import { Actividad, ETIQUETAS } from '../../modelos/actividad/actividad';

//import { Actividad, ETIQUETAS } from './../modelos/actividad/actividad';  //'../../modelos/actividad';
import { Title } from '@angular/platform-browser';

//import { Actividad } from '../modelos/actividad';

type Resultado =
  | { estado: 'invalido' }
  | { estado: 'ausente'; id: number }
  | { estado: 'encontrada'; actividad: Actividad };

@Component({
  selector: 'app-detalle-actividad',
  imports: [RouterLink],
  templateUrl: './detalle-actividad.html',
  styleUrl: './detalle-actividad.css',
})
export class DetalleActividad {
  private readonly servicio = inject(ActividadesService);
  private readonly router = inject(Router);
  private readonly titulo = inject(Title);

  readonly id = input.required<string>();

  //protected readonly actividad = computed(() => this.servicio.buscarPorId(Number(this.id())));
  protected readonly actividad = computed(() => {
    const r = this.resultado();
    return r.estado === 'encontrada' ? r.actividad : null;
  });

  protected readonly etiquetas = ETIQUETAS;

  protected readonly resultado = computed<Resultado>(() => {
    const numero = Number(this.id());

    if (!Number.isInteger(numero) || numero <= 0) {
      return { estado: 'invalido' };
    }

    const actividad = this.servicio.buscarPorId(numero);

    return actividad ? { estado: 'encontrada', actividad } : { estado: 'ausente', id: numero };
  });

  constructor() {
    effect(() => {
      const resultado = this.resultado();

      if (resultado.estado === 'encontrada') {
        this.titulo.setTitle(`${resultado.actividad.titulo} · Actividades`);
      } else if (resultado.estado === 'ausente') {
        this.titulo.setTitle('Actividad no encontrada · Actividades');
      } else {
        this.titulo.setTitle('Actividad no válida · Actividades');
      }
    });
  }

  protected eliminar(): void {
    const a = this.actividad();
    if (!a) return;

    this.servicio.eliminar(a.id);
    this.router.navigate(['/actividades'], { replaceUrl: true });
  }

  /*   protected eliminar(): void {
    const r = this.resultado();

    if (r.estado !== 'encontrada' || !confirm(`¿Eliminar «${r.actividad.titulo}»?`)) {
      return;
    }

    this.servicio.eliminar(r.actividad.id);
    this.router.navigate(['/actividades'], { replaceUrl: true });
  } */
}
