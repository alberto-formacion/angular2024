import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { PokemonsResponse } from '../interfaces/pokemons-response';
import { PokemonResponse } from '../interfaces/pokemon-response';
import { Pokemon } from '../model/pokemon';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private url = "https://pokeapi.co/api/v2/"

  constructor(private http:HttpClient) { }

  getPokemons(offset: number, limit: number):Observable<Array<Pokemon>>{
    return this.http.get<PokemonsResponse>(`${this.url}pokemon/?offset=${offset}&limit=${limit}`).pipe(map(pokemon=>{
      return pokemon.results.map((p)=>{
        const a = p.url.split("/");
        const id = parseInt(a[a.length-2]);
        return new Pokemon(id, p.name);
      })
    }));
    
  }

  getPokemon(idPokemon: number):Observable<Pokemon>{
    return this.http.get<PokemonResponse>(`${this.url}pokemon/${idPokemon}`).pipe(map(p=>{
      return new Pokemon(p.id, p.name, p.sprites.other?.['official-artwork'].front_default, p.types, p.moves);
    }));
  }
}
