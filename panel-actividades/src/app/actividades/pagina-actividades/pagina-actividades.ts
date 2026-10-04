//import { Component } from '@angular/core';
import { Component, computed, inject, input, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FiltroEstado, FiltroPrioridad } from '../../modelos/modelos';


@Component({
  imports: [],
  selector: 'app-pagina-actividades',
  styleUrl: './pagina-actividades.css',
  templateUrl: './pagina-actividades.html',
})
export class PaginaActividades {
  private readonly router = inject(Router);
  private readonly ruta = inject(ActivatedRoute);

  readonly buscar = input<string | undefined>('');
  readonly estado = input<FiltroEstado | undefined>('todas');
  readonly prioridad = input<FiltroPrioridad | undefined>('todas');

  protected readonly termino = computed(() => this.buscar() ?? '');
  protected readonly filtroEstado = computed(() => this.estado() ?? 'todas');
  protected readonly filtroPrioridad = computed(() => this.prioridad() ?? 'todas');

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
