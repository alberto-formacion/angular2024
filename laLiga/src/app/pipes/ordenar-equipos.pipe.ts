import { Pipe, PipeTransform } from '@angular/core';
import { Equipo } from '../model/equipo';

@Pipe({
  name: 'ordenarEquipos',
  standalone: true
})
export class OrdenarEquiposPipe implements PipeTransform {

  transform(equipos: Array<Equipo>): Array<Equipo> {
    return equipos.sort((a,b)=>b.fundacion<a.fundacion?1:-1);
  }

}
