import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-actividad',
  styleUrl: './actividad.css',
  templateUrl: './actividad.html',
})
export class Actividad {}

export const ETIQUETAS: Record<EstadoActividad, string> = {
  pendiente: 'Pendiente',
  en_progreso: 'En progreso',
  completada: 'Completada',
};
