import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Equipo } from '../../model/equipo';
import { OrdenarEquiposPipe } from '../../pipes/ordenar-equipos.pipe';

@Component({
  selector: 'app-lista-equipos',
  standalone: true,
  imports: [OrdenarEquiposPipe],
  templateUrl: './lista-equipos.component.html',
  styleUrl: './lista-equipos.component.css'
})
export class ListaEquiposComponent {

  @Input() equipos?:Array<Equipo>;
  @Output() seleccionarEquipo:EventEmitter<Equipo> = new EventEmitter();

  seleccionar(equipo:Equipo){
    this.seleccionarEquipo?.emit(equipo);
  }
}
