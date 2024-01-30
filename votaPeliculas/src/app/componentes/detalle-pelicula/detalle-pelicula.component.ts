import { Component, Input } from '@angular/core';
import { Pelicula } from '../../models/peliculas';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-detalle-pelicula',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './detalle-pelicula.component.html',
  styleUrl: './detalle-pelicula.component.css'
})
export class DetallePeliculaComponent {
  @Input()
  pelicula!: Pelicula;
}
