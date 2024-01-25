import { Pipe, PipeTransform } from '@angular/core';
import { Contacto } from '../contacto';

@Pipe({
  name: 'ordenarContacto',
  standalone: true
})
export class OrdenarContactoPipe implements PipeTransform {

  transform(contactos: Array<Contacto>): Array<Contacto> {
    return contactos.sort((a,b) => (b.importante && !a.importante)?1:-1);
  }

}
