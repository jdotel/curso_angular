import { Component, computed, inject, signal } from '@angular/core';
import { ActividadesService } from '../actividades';

@Component({
  imports: [],
  selector: 'app-pagina-actividades',
  styleUrl: './pagina-actividades.css',
  templateUrl: './pagina-actividades.html',
})
@service()
export class PaginaActividades {
  private readonly servicio = inject(ActividadesService);

  protected readonly actividades = this.servicio.actividades;

  protected readonly termino = signal('');
  protected readonly soloPendientes = signal(false);

  protected alternarDestacada(id: number): void {
    this.servicio.alternarDestacada(id);
  }

  protected avanzarEstado(id: number): void {
    this.servicio.avanzarEstado(id);
  }

  protected restablecer(): void {
    this.servicio.vaciar();
    this.limpiarFiltros();
    this.seleccionadaId.set(null);
  }

  protected eliminar(id: number): void {
    this.servicio.eliminar(id);
    this.seleccionadaId.update((actual) => (actual === id ? null : actual));
  }

  protected readonly total = this.servicio.total;
  protected readonly pendientes = this.servicio.pendientes;
  protected readonly enProgreso = this.servicio.enProgreso;
  protected readonly completadas = this.servicio.completadas;
  protected readonly porcentaje = this.servicio.porcentaje;

  protected readonly aviso = this.servicio.aviso;
  protected readonly sinGuardar = this.servicio.sinGuardar;

}
