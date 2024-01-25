import { Pipe, PipeTransform } from '@angular/core';
import { Contacto } from '../contacto';

@Pipe({
  name: 'buscarContacto',
  standalone: true
})
export class BuscarContactoPipe implements PipeTransform {

  transform(contactos: Array<Contacto>, nombre: string): Array<Contacto> {
    if (nombre && nombre !== '') {
      return contactos.filter(contacto => contacto.nombre.toLowerCase().indexOf(nombre.toLowerCase()) !== -1);
    }
    return contactos;
  }

}
