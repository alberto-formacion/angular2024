import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ListaEquiposComponent } from './components/lista-equipos/lista-equipos.component';
import { ListaJugadoresComponent } from './components/lista-jugadores/lista-jugadores.component';
import { DetalleJugadorComponent } from './components/detalle-jugador/detalle-jugador.component';
import { Equipo } from './model/equipo';
import { Jugador } from './model/jugador';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { FootballAPIService } from './services/football-api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ListaEquiposComponent, ListaJugadoresComponent, DetalleJugadorComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  /*equipos:Array<Equipo> = [
    new Equipo('Athletic Club', 1898,'', [
      new Jugador('Unai', 'Gomez', 'Medio', 30, 'Zurdo'),
      new Jugador('Nico', 'Williams', 'Delantero', 11, 'Diestro'),
      new Jugador('Iñaki', 'Williams', 'Delantero', 9, 'Diestro'),
      new Jugador('Iker', 'Muniain', 'Medio', 10, 'Diestro'),
    ]),
    new Equipo('Real Club Celta de Vigo', 1923 , '',[
      new Jugador('Iago', 'Aspas', 'Delantero', 10, 'Diestro'),
      new Jugador('Luca', 'de la Torre', 'Delantero', 14, 'Diestro'),
      new Jugador('Fran', 'Beltrán', 'Medio', 8, 'Diestro'),
      new Jugador('Unai', 'Nuñez', 'Defensa', 4, 'Diestro'),
    ])
  ]*/

  equipos?:Array<Equipo>;

  equipoSeleccionado?:Equipo;
  jugadorSeleccionado?:Jugador;
  formularioEquipo: FormGroup;

  constructor(private fb:FormBuilder, private footballService: FootballAPIService){
    this.formularioEquipo = this.fb.group({
      nombre:['', Validators.required],
      fundacion:[0, Validators.required],
      escudo:['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.footballService.getEquipos().subscribe({
        next: (equipos:Array<Equipo>|undefined ) => {
          this.equipos = equipos;
        }
      }
    );
  }

  mostrarEquipoSeleccionado(equipo:Equipo) {
    this.equipoSeleccionado = equipo;
    this.footballService.getJugadoresByEquipo(equipo.id).subscribe({
      next: (jugadores: Array<Jugador>|undefined) => {
        if(this.equipoSeleccionado){
          console.log(jugadores);
          this.equipoSeleccionado.jugadores = jugadores;
        }
      }
    });
  }

  mostrarJugadorSeleccionado(jugador:Jugador){
    this.jugadorSeleccionado = jugador;
  }

  guardarEquipo(){

  }
}
