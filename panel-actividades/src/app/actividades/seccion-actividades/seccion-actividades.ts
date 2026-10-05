/* import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-seccion-actividades',
  styleUrl: './seccion-actividades.css',
  templateUrl: './seccion-actividades.html',
})
export class SeccionActividades {}
 */
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-seccion-actividades',
  imports: [RouterOutlet],
  templateUrl: './seccion-actividades.html',
  styleUrl: './seccion-actividades.css',
})
export class SeccionActividades {}
