// app.routes.ts
import { Routes } from '@angular/router';
import { PaginaActividades } from './actividades/pagina-actividades/pagina-actividades';
import { PaginaEstadisticas } from './estadisticas/pagina-estadisticas/pagina-estadisticas';
import { Papelera } from './papelera/papelera/papelera';
import { PaginaNoEncontrada } from './compartido/pagina-no-encontrada/pagina-no-encontrada';



export const routes: Routes = [
  { path: '', redirectTo: 'actividades', pathMatch: 'full' },

  { path: 'actividades', component: PaginaActividades },
  { path: 'actividades/nueva', component: FormularioActividad },
  { path: 'actividades/:id', component: DetalleActividad },
  { path: 'estadisticas', component: PaginaEstadisticas },
  { path: 'papelera', component: Papelera },
  { path: '**', component: PaginaNoEncontrada },
  //{ path: '**', component: PaginaNoEncontrada },
];
