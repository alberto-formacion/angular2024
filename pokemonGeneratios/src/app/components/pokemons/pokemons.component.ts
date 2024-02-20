import { Component, Input, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from '../../model/pokemon';

@Component({
  selector: 'app-pokemons',
  standalone: true,
  imports: [],
  templateUrl: './pokemons.component.html',
  styleUrl: './pokemons.component.css'
})
export class PokemonsComponent implements OnInit{

  @Input() idPokemon!:number;
  pokemon!:Pokemon;

  constructor(private pokemonService: PokemonService){}

  ngOnInit(): void {
    this.pokemonService.getPokemon(this.idPokemon).subscribe({
      next:(pokemon)=>{
        console.log(pokemon);
        this.pokemon = pokemon;
      }
    });
  }

}
