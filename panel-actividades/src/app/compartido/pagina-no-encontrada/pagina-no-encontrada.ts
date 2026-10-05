/*
import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-pagina-no-encontrada',
  styleUrl: './pagina-no-encontrada.css',
  templateUrl: './pagina-no-encontrada.html',
})
export class PaginaNoEncontrada {}
*/

import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pagina-no-encontrada',
  imports: [RouterLink],
  templateUrl: './pagina-no-encontrada.html',
  styleUrl: './pagina-no-encontrada.css',
})
export class PaginaNoEncontrada {}
