import { Pipe, PipeTransform } from '@angular/core';
import { Jugador } from '../model/jugador';

@Pipe({
  name: 'ordenarJugadores',
  standalone: true
})
export class OrdenarJugadoresPipe implements PipeTransform {

  transform(jugadores: Array<Jugador>): Array<Jugador> {
    return jugadores.sort((a,b)=> b.apellidos < a.apellidos?1:-1);
  }

}
