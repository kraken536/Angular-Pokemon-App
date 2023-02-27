import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';


@Component({
  selector: 'app-root',
  templateUrl: "./app.component.html",
})
export class AppComponent implements OnInit {
  pokemonList: Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon|undefined;

  constructor(){}

  ngOnInit(): void{
    //console.table(this.pokemonList);
  }

  selectPokemon(pokemonId: string){
    const pokemon: Pokemon|undefined = this.pokemonList.find(pokemon => pokemon.id == +pokemonId);
    //const index: number = +(event.target as HTMLInputElement).value; // The sign "+" allows us to convert the value into a number.
    try{
      if(pokemon){
        this.pokemonSelected = pokemon;
        console.log(`You've clicked on pokemon ${pokemon.name}`);
      }else{
        console.log(`There is no Pokémon available at index ${pokemonId}.`);
        this.pokemonSelected = pokemon;
      }
    }catch(error){
      throw `There is no Pokémon available at index ${pokemonId}.`;
    }
  }
}