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
})
export class DetalleActividad {
  private readonly servicio = inject(ActividadesService);

  readonly id = input.required<string>();

  protected readonly actividad = computed(() => this.servicio.buscarPorId(Number(this.id())));
}
