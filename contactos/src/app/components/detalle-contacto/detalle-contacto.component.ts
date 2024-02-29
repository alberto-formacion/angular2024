import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Result } from '../../interfaces/contacto';

@Component({
  selector: 'app-detalle-contacto',
  standalone: true,
  imports: [],
  templateUrl: './detalle-contacto.component.html',
  styleUrl: './detalle-contacto.component.css'
})
export class DetalleContactoComponent {
  @Input() contacto!:Result;
  @Output() vaciarContacto:EventEmitter<undefined> = new EventEmitter();

  mostrarListaContactos(){
    this.vaciarContacto.emit(undefined);
  }
}
