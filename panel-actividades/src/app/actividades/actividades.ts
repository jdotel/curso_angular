import { Service, signal } from '@angular/core';
import { Actividad } from '../modelos/actividad';

@Service()
export class ActividadesService {
  private readonly lista = signal<Actividad[]>([]);

  readonly actividades = this.lista.asReadonly();

  completar(id: number): void {
    this.lista.update((actual) =>
      actual.map((a) => (a.id === id ? { ...a, estado: 'completada' } : a)),
    );
  }

  eliminar(id: number): void {
    this.lista.update((actual) => actual.filter((a) => a.id !== id));
  }


  // …
}
}
