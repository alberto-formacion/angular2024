import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Jugador } from '../../model/jugador';
import { OrdenarJugadoresPipe } from "../../pipes/ordenar-jugadores.pipe";

@Component({
    selector: 'app-lista-jugadores',
    standalone: true,
    templateUrl: './lista-jugadores.component.html',
    styleUrl: './lista-jugadores.component.css',
    imports: [OrdenarJugadoresPipe, OrdenarJugadoresPipe]
})
export class ListaJugadoresComponent {
  @Input() jugadores?:Array<Jugador>;
  @Output() seleccionarJugador:EventEmitter<Jugador> = new EventEmitter();

  seleccionar(jugador:Jugador){
    this.seleccionarJugador.emit(jugador);
  }
}
