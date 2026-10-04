// actividades/actividades.routes.ts
import { Routes } from '@angular/router';
import { SeccionActividades } from '../actividades/seccion-actividades/seccion-actividades'; /*./actividades/seccion-actividades/seccion-actividades'; */
import { PaginaActividades } from '../actividades/pagina-actividades/pagina-actividades';  /* '../actividades/pagina-actividades/pagina-actividades'; */
import { DetalleActividad } from '../actividades/detalle-actividad/detalle-actividad'; /* '../detalle-actividad/detalle-actividad'; */

export const rutas: Routes = [
  {
    path: '',
    component: SeccionActividades,
    children: [
      { path: '', component: PaginaActividades, title: 'Actividades' },
      { path: ':id', component: DetalleActividad },
    ],
  },
];
