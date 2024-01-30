import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DetallePeliculaComponent } from './componentes/detalle-pelicula/detalle-pelicula.component';
import { ListaPeliculasComponent } from './componentes/lista-peliculas/lista-peliculas.component';
import { Pelicula } from './models/peliculas';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, DetallePeliculaComponent, ListaPeliculasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'votaPeliculas';
  peliculaSeleccionada!: Pelicula;
  
  mostrarDetalles($event: Pelicula) {
    this.peliculaSeleccionada = $event;
  }
}
