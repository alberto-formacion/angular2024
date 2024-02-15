import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonsResponse } from '../interfaces/pokemons-response';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  url:string = "https://pokeapi.co/api/v2/";

  constructor(private http:HttpClient) { }

  getPokemons():Observable<PokemonsResponse>{
    return this.http.get<PokemonsResponse>(`${this.url}pokemon`);
  }
}
