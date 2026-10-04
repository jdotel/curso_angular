import { Routes } from '@angular/router';
import { PaginaActividades } from './actividades/pagina-actividades/pagina-actividades';
import { PaginaEstadisticas } from './estadisticas/pagina-estadisticas/pagina-estadisticas';
import { Papelera } from './papelera/papelera';

export const routes: Routes = [
  { path: 'actividades', component: PaginaActividades },
  { path: 'estadisticas', component: PaginaEstadisticas },
  { path: 'papelera', component: Papelera },
];
