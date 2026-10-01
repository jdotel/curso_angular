export class PaginaActividades {
  private readonly servicio = inject(ActividadesService);

  protected readonly actividades = this.servicio.actividades;
  protected readonly termino = signal('');

  protected readonly actividadesVisibles = computed(() => {
    const t = this.termino().trim().toLowerCase();
    return this.actividades().filter((a) => a.titulo.toLowerCase().includes(t));
  });

  protected completarActividad(id: number): void {
    this.servicio.completar(id);
  }

  protected eliminarActividad(id: number): void {
    this.servicio.eliminar(id);
  }
}
