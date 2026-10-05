// app.routes.ts
import { Routes } from '@angular/router';
import { PaginaActividades } from  './actividades/pagina-actividades/pagina-actividades';
import { SeccionActividades } from './actividades/seccion-actividades/seccion-actividades';
import { PaginaEstadisticas } from './estadisticas/pagina-estadisticas/pagina-estadisticas';
import { PaginaNoEncontrada } from './compartido/pagina-no-encontrada/pagina-no-encontrada';
import { DetalleActividad } from './actividades/detalle-actividad/detalle-actividad';


export const routes: Routes = [
  { path: '', redirectTo: 'actividades', pathMatch: 'full' },

  /* { path: '**', component: PaginaNoEncontrada }, */

  //{ path: 'actividades', component: PaginaActividades },
  //{ path: 'actividades/nueva', component: PaginaNoEncontrada },
  //{ path: 'actividades/:id', component: DetalleActividad },
  //{ path: 'estadisticas', component: PaginaEstadisticas },

  { path: 'actividades', component: PaginaActividades, title: 'Actividades' },
  { path: 'actividades/nueva', component: PaginaNoEncontrada, title: 'Nueva actividad' },
  { path: 'actividades/:id', component: DetalleActividad, title: 'Detalle de la actividad' },
  { path: 'estadisticas', component: PaginaEstadisticas, title: 'Estadísticas' },
  { path: '**', component: PaginaNoEncontrada, title: 'Página no encontrada' },

  {
    path: 'actividades',
    component: SeccionActividades,
    children: [
      { path: '', component: PaginaActividades, title: 'Actividades' },
      { path: 'nueva', component: PaginaNoEncontrada, title: 'Nueva actividad' },
      { path: ':id', component: DetalleActividad, title: 'Detalle de la actividad' },
    ],
  },

  {
    path: 'estadisticas',
    title: 'Estadísticas',
    loadComponent: () =>
      import('./estadisticas/pagina-estadisticas/pagina-estadisticas').then(
        (m) => m.PaginaEstadisticas,
      ),
  },

  { path: '**', component: PaginaNoEncontrada, title: 'Página no encontrada' },
];

/*
  {
    path: 'actividades',
    component: SeccionActividades,
    children: [
      { path: '', component: PaginaActividades, title: 'Actividades' },
      {
        path: 'nueva',
        loadComponent: () =>
          import('./actividades/formulario-actividad/formulario-actividad').then(
            (m) => m.FormularioActividad,
          ),
        title: 'Nueva actividad',
      },
      {
        path: ':id',
        loadComponent: () =>
          import('./actividades/detalle-actividad/detalle-actividad').then(
            (m) => m.DetalleActividad,
          ),
      },
    ],
  },

  {
    path: 'estadisticas',
    loadChildren: () => import('./estadisticas/estadisticas.routes').then((m) => m.rutas),
  },

  {
    path: '**',
    loadComponent: () =>
      import('./compartido/pagina-no-encontrada/pagina-no-encontrada').then(
        (m) => m.PaginaNoEncontrada,
      ),
    title: 'Página no encontrada',
  },
];

/*
// app.routes.ts
import { Routes } from '@angular/router';
import { PaginaActividades } from './actividades/pagina-actividades/pagina-actividades';
import { PaginaEstadisticas } from './estadisticas/pagina-estadisticas/pagina-estadisticas';
import { Papelera } from './papelera/papelera/papelera';
import { PaginaNoEncontrada } from './compartido/pagina-no-encontrada/pagina-no-encontrada';



export const routes: Routes = [
  { path: '', redirectTo: 'actividades', pathMatch: 'full' },

  {
    path: 'actividades',
    component: SeccionActividades,
    children: [
      { path: '', component: PaginaActividades, title: 'Actividades' },
      { path: 'nueva', component: FormularioActividad, title: 'Nueva actividad' },
      { path: ':id', component: DetalleActividad },
      { path: ':id/editar', component: FormularioActividad, title: 'Editar actividad' },
    ],
  },

  { path: 'estadisticas', component: PaginaEstadisticas, title: 'Estadísticas' },
  { path: '**', component: PaginaNoEncontrada, title: 'Página no encontrada' },
];

 /* { path: '', redirectTo: 'actividades', pathMatch: 'full' },

  { path: 'actividades',
    component: PaginaActividades
   },
  { path: 'actividades/nueva', component: FormularioActividad },
  { path: 'actividades/:id', component: DetalleActividad },
  { path: 'estadisticas', component: PaginaEstadisticas },
  { path: 'papelera', component: Papelera },
  { path: '**', component: PaginaNoEncontrada },
  //{ path: '**', component: PaginaNoEncontrada },
];*/
