import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ResumenActividades } from './actividades/resumen-actividades/resumen-actividades';
import { ListaActividades } from './actividades/lista-actividades/lista-actividades';
import { TarjetaActividad } from './actividades/tarjeta-actividad/tarjeta-actividad';
import { TableroPrioridades } from './tablero-prioridades/tablero-prioridades';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ResumenActividades, ListaActividades, TarjetaActividad, TableroPrioridades],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
