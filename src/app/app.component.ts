import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  template: `<h1>Liste de Pokémons</h1>`
})
export class AppComponent implements OnInit {
  pokemonList: Pokemon[] = POKEMONS;

  constructor(){}

  ngOnInit(): void{
    console.table(this.pokemonList);
    this.selectPokemon(this.pokemonList[1]);
  }

  selectPokemon(pokemon: Pokemon){
    console.log(`You've clixked on pokemon ${pokemon.name}`);
  }
}
