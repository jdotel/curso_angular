import { Component } from '@angular/core';

interface Actividad {
  id: number;
  titulo: string;
  estado: 'pendiente' | 'en_progreso' | 'completada';
}

@Component({
  selector: 'app-lista-actividades',
  templateUrl: './lista-actividades.html',
  styleUrl: './lista-actividades.css',
})
export class ListaActividades {
  protected actividades: Actividad[] = [
    { id: 1, titulo: 'Preparar la estructura HTML', estado: 'completada' },
    { id: 2, titulo: 'Aplicar estilos con CSS', estado: 'completada' },
    { id: 3, titulo: 'Practicar Angular', estado: 'en_progreso' },
    { id: 4, titulo: 'Escribir las pruebas', estado: 'pendiente' },
  ];

  protected vaciar(): void {
    this.actividades = [];
  }
}
