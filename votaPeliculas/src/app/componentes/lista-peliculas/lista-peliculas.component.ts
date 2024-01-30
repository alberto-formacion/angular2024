import { Component, EventEmitter, Output } from '@angular/core';
import { Pelicula } from '../../models/peliculas';
import { peliculas } from '../../../peliculas';

@Component({
  selector: 'app-lista-peliculas',
  standalone: true,
  imports: [],
  templateUrl: './lista-peliculas.component.html',
  styleUrl: './lista-peliculas.component.css'
})
export class ListaPeliculasComponent {

  @Output() peliculaSeleccionadaEvent = new EventEmitter<Pelicula>();
  peliculas = peliculas;

  detallePelicula(peliculaSeleccionada: Pelicula) {
    this.peliculaSeleccionadaEvent.emit(peliculaSeleccionada);
  }
}
