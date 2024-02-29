import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseContacto } from '../interfaces/contacto';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  urlBase = "https://randomuser.me/api/?&results=10&seed=abc";

  constructor(private http:HttpClient) { }

  obtenerTodosContactos():Observable<ResponseContacto>{
    return this.http.get<ResponseContacto>(this.urlBase);
  }
}
