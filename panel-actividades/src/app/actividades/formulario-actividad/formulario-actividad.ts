import { Component } from '@angular/core';
import { Prioridad } from '../../modelos/modelos';

@Component({
  imports: [],
  selector: 'app-formulario-actividad',
  styleUrl: './formulario-actividad.css',
  templateUrl: './formulario-actividad.html',
})
export class FormularioActividad {
  private readonly servicio = inject(ActividadesService);
  private readonly router = inject(Router);

  protected readonly error = signal('');

  protected crear(titulo: string, prioridad: Prioridad): void {
    const creada = this.servicio.crear(titulo, prioridad);

    if (!creada) {
      this.error.set('El título debe tener entre 3 y 80 caracteres y no repetirse.');
      return;
    }

    this.router.navigate(['/actividades', creada.id], { replaceUrl: true });
  }
}
