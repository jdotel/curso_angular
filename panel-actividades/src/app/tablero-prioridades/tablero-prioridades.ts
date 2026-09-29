import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-tablero-prioridades',
  styleUrl: './tablero-prioridades.css',
  templateUrl: './tablero-prioridades.html',
})
export class TableroPrioridades {
  protected readonly titulo = signal('Tablero de prioridades');
  protected readonly contador = signal(0);

  protected sumar(): void {
    this.contador.set(this.contador() + 1);
  }
}
