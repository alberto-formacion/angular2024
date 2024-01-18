import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Tarea } from './tarea';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Hola';

  nuevaTarea = new Tarea("",false);

  listaTareas: Array<Tarea> = [];

  finalizarTarea(tarea: Tarea) {

    //let listaClases = e.target.classList;
    /*if(listaClases.contains("tachado")){
      listaClases.remove("tachado");
    }else{
      listaClases.add("tachado");
    }*/

    //listaClases.contains("tachado")?listaClases.remove("tachado"):listaClases.add("tachado");
    tarea.terminada = !tarea.terminada;
  }

  anadirTarea(){
    //this.listaTareas.push(this.nuevaTarea);

    this.listaTareas = [...this.listaTareas, this.nuevaTarea];

    this.nuevaTarea = new Tarea("",false);
  }

  estaTerminada(tarea: Tarea){
    if(tarea.terminada){
      return 'tachado'
    }else{
      return '';
    };
  }
}
