import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-panel-section',
  styleUrl: './panel-section.css',
  templateUrl: './panel-section.html',
})
export class PanelSection {
  readonly titulo = input.required<string>();
  readonly descripcion = input('');
}
