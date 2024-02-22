import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from '../../model/pokemon';
import { Subscription } from 'rxjs';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-pokemons',
  standalone: true,
  imports: [NgClass],
  templateUrl: './pokemons.component.html',
  styleUrl: './pokemons.component.css'
})
export class PokemonsComponent implements OnInit, OnDestroy{

  @Input() idPokemon!:number;
  pokemon!:Pokemon;
  pokemon$!:Subscription;

  constructor(private pokemonService: PokemonService){}

  ngOnInit(): void {
    this.pokemon$ = this.pokemonService.getPokemon(this.idPokemon).subscribe({
      next:(pokemon)=>{
        console.log(pokemon);
        this.pokemon = pokemon;
      }
    });
  }

  ngOnDestroy(): void {
      this.pokemon$.unsubscribe();
  }

}
