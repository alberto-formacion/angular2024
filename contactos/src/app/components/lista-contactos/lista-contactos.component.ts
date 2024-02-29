import { Component, OnInit } from '@angular/core';
import { ContactoService } from '../../services/contacto.service';
import { ResponseContacto, Result } from '../../interfaces/contacto';
import { DetalleContactoComponent } from '../detalle-contacto/detalle-contacto.component';

@Component({
  selector: 'app-lista-contactos',
  standalone: true,
  imports: [DetalleContactoComponent],
  templateUrl: './lista-contactos.component.html',
  styleUrl: './lista-contactos.component.css'
})
export class ListaContactosComponent implements OnInit{

  contacts!:Array<Result>;
  contactoSeleccionado?:Result;

  constructor(private contactoService:ContactoService){}

  ngOnInit(): void {
    this.contactoService.obtenerTodosContactos().subscribe({
      next:(contactos:ResponseContacto)=>{
        this.contacts = contactos.results;
      }
    });
  }

  mostrarDetalleContacto(contacto:Result){
    this.contactoSeleccionado = contacto;
  }

  vaciarContacto(usuarioVacio:undefined){
    this.contactoSeleccionado = usuarioVacio;
  }

}
