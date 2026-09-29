import { Component } from '@angular/core';

@Component({
  selector: 'app-resumen-actividades',
  templateUrl: './resumen-actividades.html',
  styleUrl: './resumen-actividades.css',
})
export class ResumenActividades {
  protected readonly total: number = 4;
  protected readonly pendientes: number = 2;
  protected readonly completadas: number = 2;

  protected get resumen(): string {
    return `${this.completadas} de ${this.total} completadas`;
  }
}
