import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PokemonService } from './services/pokemon.service';
import { Pokemon } from './model/pokemon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'pokemon2';
  pokemons:Array<Pokemon> = new Array<Pokemon>();

  constructor(private pokemonService:PokemonService){}

  ngOnInit(): void {
    this.pokemonService.getPokemons().subscribe({
      next: (res)=>{
        res.results.forEach((pokemon)=>{
          console.log(pokemon.url);
          const a = pokemon.url.split("/");
          console.log(a);
          const id = parseInt(a[a.length-2]);
          console.log(id);
          this.pokemons.push(new Pokemon(id, pokemon.name));
        });
      },
      error: (error) => {
        console.log(error);
      },
      complete: ()=>{
        console.log("la peticion se ha completado");
        console.log(this.pokemons);
      }
    });
  }
}
