import { Component, computed, effect, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { ActividadesService } from '../actividades';
import { Actividad } from '../modelos/actividad';

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
  private readonly titulo = inject(Title);
  private readonly router = inject(Router);

  readonly id = input.required<string>();

  protected readonly resultado = computed<Resultado>(() => {
    /* … */
  });

  constructor() {
    effect(() => {
      /* … el título … */
    });
  }

  protected eliminar(): void {
    const r = this.resultado();

    if (r.estado !== 'encontrada' || !confirm(`¿Eliminar «${r.actividad.titulo}»?`)) {
      return;
    }

    this.servicio.eliminar(r.actividad.id);
    this.router.navigate(['/actividades'], { replaceUrl: true });
  }
}


/*
//import { Component } from '@angular/core';
import { Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ActividadesService } from '../actividades';

@Component({
  selector: 'app-detalle-actividad',
  imports: [RouterLink],
  templateUrl: './detalle-actividad.html',
  styleUrl: './detalle-actividad.css',

  /* imports: [],
  selector: 'app-detalle-actividad',
  styleUrl: './detalle-actividad.css',
  templateUrl: './detalle-actividad.html',
*/
/*
export class DetalleActividad {
  private readonly servicio = inject(ActividadesService);
  private readonly router = inject(Router);

  readonly id = input.required<string>();

  protected readonly actividad = computed(() => this.servicio.buscarPorId(Number(this.id())));

  protected eliminar(): void {
    const a = this.actividad();

    if (!a || !confirm(`¿Eliminar «${a.titulo}»?`)) {
      return;
    }

    this.servicio.eliminar(a.id);
    this.router.navigate(['/actividades'], { replaceUrl: true });
  }
}
*/
