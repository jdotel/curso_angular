<nav class="filtros" aria-label="Filtros de estado">
  <a routerLink="/actividades" [queryParams]="{ estado: null }"
     queryParamsHandling="merge">Todas</a>

  <a routerLink="/actividades" [queryParams]="{ estado: 'pendientes' }"
     queryParamsHandling="merge">Pendientes</a>

  <a routerLink="/actividades" [queryParams]="{ estado: 'completadas' }"
     queryParamsHandling="merge">Completadas</a>
</nav>

<app-lista-actividades
  [actividades]="visibles()"
  [mensajeVacio]="mensajeVacio()" />
