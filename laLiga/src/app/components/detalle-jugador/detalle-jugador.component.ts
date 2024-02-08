import { Component, Input } from '@angular/core';
import { Jugador } from '../../model/jugador';

@Component({
  selector: 'app-detalle-jugador',
  standalone: true,
  imports: [],
  templateUrl: './detalle-jugador.component.html',
  styleUrl: './detalle-jugador.component.css'
})
export class DetalleJugadorComponent {
  @Input() jugador?:Jugador;
}
