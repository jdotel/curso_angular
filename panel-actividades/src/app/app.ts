import { Component } from '@angular/core';
//import { RouterLink, RouterOutlet } from '@angular/router';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { PaginaEstadisticas } from './estadisticas/pagina-estadisticas/pagina-estadisticas';

@Component({
  selector: 'app-root',
  //imports: [RouterOutlet, RouterLink, PaginaEstadisticas],
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}


/*
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ResumenActividades } from './actividades/resumen-actividades/resumen-actividades';
import { ListaActividades } from './actividades/lista-actividades/lista-actividades';
import { TarjetaActividad } from './actividades/tarjeta-actividad/tarjeta-actividad';
//import { TableroPrioridades } from './tablero-prioridades/tablero-prioridades'; // '/tablero-prioridades/tablero-prioridades';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ResumenActividades, ListaActividades, TarjetaActividad, TableroPrioridades],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
*/
