import { Component } from '@angular/core';
import { EstadoActividad } from '../../modelos/actividad';

@Component({
  selector: 'app-tarjeta-actividad',
  templateUrl: './tarjeta-actividad.html',
  styleUrl: './tarjeta-actividad.css',
})
export class TarjetaActividad {
  protected readonly titulo = 'Practicar Angular';
  protected readonly porcentaje: number = 45;
  protected readonly prioridad: 'baja' | 'media' | 'alta' = 'alta';
  protected readonly descripcion = 'Completar el módulo de componentes.'; // nuevo

  protected estado: EstadoActividad = 'pendiente'; // ya no es readonly
  protected detallesVisibles = false; // nuevo

  protected get completada(): boolean {
    return this.estado === 'completada';
  }

  protected get esUrgente(): boolean {
    return this.prioridad === 'alta';
  }

  protected alternarDetalles(): void {
    // nuevo
    this.detallesVisibles = !this.detallesVisibles;
  }

  protected avanzarEstado(): void {
    // nuevo
    if (this.estado === 'pendiente') {
      this.estado = 'en_progreso';
    } else if (this.estado === 'en_progreso') {
      this.estado = 'completada';
    }
  }
}
