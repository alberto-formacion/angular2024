import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PokemonService } from './services/pokemon.service';
import { Pokemon } from './model/pokemon';
import { PokemonsComponent } from './components/pokemons/pokemons.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, PokemonsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'pokemonGeneratios';
  pokemons!:Array<Pokemon>;
  offset:number = 0;
  limit:number = 10;
  deshabilitarAnterior:boolean = true;
  deshabilitarSiguiente:boolean = true;

  constructor(private pokemonService:PokemonService){}

  ngOnInit(): void {
    this.obtenerPokemons();
  }

  mostrarAnteriores(){
    this.offset -= this.limit;
    this.obtenerPokemons();
  }

  mostrarSiguientes(){
    this.offset += this.limit;
    this.obtenerPokemons();
  }

  obtenerPokemons(){
    this.pokemonService.getPokemons(this.offset,this.limit).subscribe({
      next: (pokemons:Array<Pokemon>)=>{
        this.pokemons = pokemons;

        if(this.offset==0){
          this.deshabilitarAnterior=true;
        }else{
          this.deshabilitarAnterior=false;
        }

        if(pokemons.length != this.limit){
          this.deshabilitarSiguiente=true;
        }else{
          this.deshabilitarSiguiente=false;
        }
      }
    });
  }
}
