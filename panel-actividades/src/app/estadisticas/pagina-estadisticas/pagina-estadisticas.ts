import { Component, inject } from '@angular/core';
import { ActividadesService } from '../../actividades/actividades';

@Component({
  imports: [],
  selector: 'app-pagina-estadisticas',
  styleUrl: './pagina-estadisticas.css',
  templateUrl: './pagina-estadisticas.html',
})
//export class PaginaEstadisticas {}
export class PaginaEstadisticas {
  /*
  private readonly servicio = inject(ActividadesService);

  protected readonly total = this.servicio.total;
  protected readonly pendientes = this.servicio.totalPendientes;
  protected readonly porcentaje = computed(() =>
    this.total() === 0 ? 0 : Math.round(((this.total() - this.pendientes()) / this.total()) * 100),
  );*/

  private readonly servicio = inject(ActividadesService);

  protected readonly total = this.servicio.total;

}
