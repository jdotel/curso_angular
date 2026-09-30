import { Component, computed, effect, signal } from '@angular/core';
import { Actividad, ACTIVIDADES } from '../modelos/actividad';

@Component({
  selector: 'app-tablero-prioridades',
  templateUrl: './tablero-prioridades.html',
  styleUrl: './tablero-prioridades.css',
})
export class TableroPrioridades {
  protected readonly actividades = signal<Actividad[]>([...ACTIVIDADES]);
  protected readonly termino = signal('');

  protected readonly visibles = computed(() => {
    const termino = this.termino().trim().toLocaleLowerCase('es');
    return this.actividades().filter(
      (a) => termino === '' || a.titulo.toLocaleLowerCase('es').includes(termino),
    );
  });

  protected readonly mostradas = computed(() => this.visibles().length);

  constructor() {
    effect(() => {
      document.title = `Panel (${this.mostradas()} actividades)`;
    });
  }

  protected completar(id: number): void {
    this.actividades.update((actuales) =>
      actuales.map((a) => (a.id === id ? { ...a, estado: 'completada' } : a)),
    );
  }
}
