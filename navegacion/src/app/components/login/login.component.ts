import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  usuario: Usuario = new Usuario('','','','',0);
  usuarioLogueado: boolean = false;

  login() {
    if(this.usuario.email == "a@a.com" && this.usuario.contrasena == "1234"){
      this.usuarioLogueado = true;
      this.usuario = new Usuario("Alberto", "1234", "Garcia de Cortazar", "a@a.com", 1);
    }
  }

  logout() {
    this.usuarioLogueado = false;
    this.usuario = new Usuario('','','','',0);
  }
}
