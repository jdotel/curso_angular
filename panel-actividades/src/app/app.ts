//import { Component } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
//import { ResumenActividades } from './actividades/resumen-actividades/resumen-actividades';
//import { ListaActividades } from './actividades/lista-actividades/lista-actividades';

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ResumenActividades } from './actividades/resumen-actividades/resumen-actividades';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ResumenActividades],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
