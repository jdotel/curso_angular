import { Component, input, output } from '@angular/core';
import { Actividad } from '../../modelos/actividad';
import { TarjetaActividad } from '../tarjeta-actividad/tarjeta-actividad';

@Component({
  selector: 'app-lista-actividades',
  imports: [TarjetaActividad],
  templateUrl: './lista-actividades.html',
  styleUrl: './lista-actividades.css',
})
export class ListaActividades {
  readonly actividades = input.required<Actividad[]>();
  readonly seleccionadaId = input<number | null>(null);
  readonly mensajeVacio = input('No hay nada que mostrar.');

  readonly avanceSolicitado = output<number>();
  readonly eliminacionSolicitada = output<number>();
  readonly seleccionCambiada = output<number>();
}
