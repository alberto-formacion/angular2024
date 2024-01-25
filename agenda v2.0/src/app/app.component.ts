import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Contacto } from './contacto';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { nombresProhibidos } from './validators/nombresProhibidos'
import { dniValido } from './validators/dniValido';
import { OrdenarContactoPipe } from './pipes/ordenar-contacto.pipe';
import { BuscarContactoPipe } from './pipes/buscar-contacto.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ReactiveFormsModule, OrdenarContactoPipe, BuscarContactoPipe, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {


  formularioContacto: FormGroup;
  title = 'Agenda';
  initialValues: Contacto;
  contactoBuscar = '';

  constructor(private fb: FormBuilder) {
    this.formularioContacto = this.fb.group({
      dni: ['', [Validators.required, dniValido()]],
      nombre: ['', [Validators.required, nombresProhibidos()]],
      apellidos: ['', Validators.required],
      telefono: ['', Validators.required],
      email: ['', Validators.required],
      importante: [false, Validators.required]
    });

    this.initialValues = this.formularioContacto.value;
  }

  contactos: Array<Contacto> = [
    new Contacto("11111111T","Alberto","GDC","666666666","a@a.com",false),
    new Contacto("22222222N","Alberto","GDC","666666666","a@a.com",true),
    new Contacto("33333333D","Alberto","GDC","666666666","a@a.com",false),
    new Contacto("44444444F","Alberto","GDC","666666666","a@a.com",false),
    new Contacto("55555555G","Alberto","GDC","666666666","a@a.com",false),
    new Contacto("66666666H","Alberto","GDC","666666666","a@a.com",false),
    new Contacto("77777777A","Alberto","GDC","666666666","a@a.com",true),
    new Contacto("88888888Q","Alberto","GDC","666666666","a@a.com",false),
    new Contacto("99999999E","Alberto","GDC","666666666","a@a.com",false),
    new Contacto("00000000R","Alberto","GDC","666666666","a@a.com",true)
  ];

  hasErrors(control: string, errorType: string){
    return this.formularioContacto.get(control)?.hasError(errorType) && this.formularioContacto.get(control)?.touched;
  }

  guardarContacto(){
    console.log(this.formularioContacto);
    const contactoNuevo:Contacto = this.formularioContacto.value;
    contactoNuevo.fechaAlta = new Date();
    this.contactos = [...this.contactos, contactoNuevo];
    this.formularioContacto.reset(this.initialValues);
  }
}
