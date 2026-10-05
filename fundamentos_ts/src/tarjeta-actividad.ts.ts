import { Component } from "@angular/core";
import { EstadoActividad } from "../../modelos/actividad";

@Component({
  selector: "app-tarjeta-actividad",
  templateUrl: "./tarjeta-actividad.html",
  styleUrl: "./tarjeta-actividad.css",
})
export class TarjetaActividad {
  protected readonly titulo = "Practicar Angular";
  protected readonly estado: EstadoActividad = "en_progreso";
  protected readonly porcentaje: number = 45;

  protected get completada(): boolean {
    return this.estado === "completada";
  }
}
