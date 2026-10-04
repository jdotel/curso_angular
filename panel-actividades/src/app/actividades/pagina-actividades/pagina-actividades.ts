//import { Component } from '@angular/core';
import { Component, computed, inject, input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FiltroEstado, FiltroPrioridad } from '../../modelos/actividad/actividad';
import { ActividadesService } from '../actividades';
import { FiltrosActividades } from '../filtros-actividades/filtros-actividades';
import { ListaActividades } from '../lista-actividades/lista-actividades';


@Component({
  imports: [RouterLink, RouterLinkActive, FiltrosActividades, ListaActividades],
  selector: 'app-pagina-actividades',
  styleUrl: './pagina-actividades.css',
  templateUrl: './pagina-actividades.html',
})
export class PaginaActividades {
  private readonly router = inject(Router);
  private readonly ruta = inject(ActivatedRoute);
  private readonly servicio = inject(ActividadesService);

  readonly buscar = input<string | undefined>('');
  readonly estado = input<FiltroEstado | undefined>('todas');
  readonly prioridad = input<FiltroPrioridad | undefined>('todas');

  protected readonly termino = computed(() => this.buscar() ?? '');
  protected readonly filtroEstado = computed(() => this.estado() ?? 'todas');
  protected readonly filtroPrioridad = computed(() => this.prioridad() ?? 'todas');
  protected readonly hayFiltros = computed(
    () => this.termino() !== '' || this.filtroEstado() !== 'todas' || this.filtroPrioridad() !== 'todas',
  );
  protected readonly visibles = computed(() => {
    const termino = this.termino().trim().toLocaleLowerCase();
    const estado = this.filtroEstado();
    const prioridad = this.filtroPrioridad();

    return this.servicio.actividades().filter((actividad) =>
      actividad.titulo.toLocaleLowerCase().includes(termino) &&
      (estado === 'todas' || actividad.estado === estado) &&
      (prioridad === 'todas' || actividad.prioridad === prioridad),
    );
  });
  protected readonly mensajeVacio = computed(() =>
    this.termino() || this.filtroEstado() !== 'todas' || this.filtroPrioridad() !== 'todas'
      ? 'No hay actividades que coincidan con los filtros.'
      : 'Todavía no hay actividades.',
  );

  //

  protected cambiarBuscar(valor: string): void {
    this.actualizar({ buscar: valor.trim() === '' ? null : valor });
  }

  protected cambiarEstado(valor: FiltroEstado): void {
    this.actualizar({ estado: valor === 'todas' ? null : valor });
  }

  protected cambiarPrioridad(valor: FiltroPrioridad): void {
    this.actualizar({ prioridad: valor === 'todas' ? null : valor });
  }

  protected limpiarFiltros(): void {
    this.actualizar({ buscar: null, estado: null, prioridad: null });
  }

  private actualizar(cambios: Record<string, string | null>): void {
    this.router.navigate([], {
      relativeTo: this.ruta,
      queryParams: cambios,
      queryParamsHandling: 'merge',
      replaceUrl: true,
    });
  }

}
