import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Contacto } from './contacto';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Agenda';

  contactos: Array<Contacto> = [
    new Contacto("66666666F","Alberto","GDC","666666666","a@a.com",false),
  ];

  contactoNuevo: Contacto = new Contacto("","","","","",false);

  guardarContacto(){
    this.contactos = [...this.contactos, this.contactoNuevo];
    this.contactoNuevo = new Contacto("","","","","",false);
  }
}
