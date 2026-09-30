import { Component, computed, signal } from '@angular/core';
import { Actividad, FiltroEstado, FiltroPrioridad } from '../../modelos/actividad';
import { FiltrosActividades } from '../filtros-actividades/filtros-actividades';
import { ListaActividades } from '../lista-actividades/lista-actividades';
import { PanelSeccion } from '../../compartido/panel-seccion/panel-seccion';
import { ResumenActividades } from '../resumen-actividades/resumen-actividades';

@Component({
  selector: 'app-pagina-actividades',
  imports: [FiltrosActividades, ListaActividades, PanelSeccion, ResumenActividades],
  templateUrl: './pagina-actividades.html',
  styleUrl: './pagina-actividades.css',
})
export class PaginaActividades {
  private readonly orden: Record<Prioridad, number>;

  protected readonly actividades; // signal
  protected readonly termino; // signal
  protected readonly filtroEstado; // signal
  protected readonly filtroPrioridad; // signal
  protected readonly seleccionadaId; // signal

  protected readonly total; // computed
  protected readonly pendientes;
  protected readonly enProgreso;
  protected readonly completadas;
  protected readonly porcentaje;
  protected readonly visibles;
  protected readonly mostradas;
  protected readonly hayFiltros;
  protected readonly mensajeVacio;
  protected readonly seleccionada;

  protected alternarDestacada(id: number): void;
  protected avanzarEstado(id: number): void;
  protected eliminar(id: number): void;
  protected seleccionar(id: number): void;
  protected limpiarFiltros(): void;
  protected restablecer(): void;
  private siguienteEstado(estado: EstadoActividad): EstadoActividad;
}
