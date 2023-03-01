import { Component, OnInit, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { POKEMONS } from '../mock-pokemon-list';


@Component({
  selector: 'app-details-pokemon',
  templateUrl: './details-pokemon.component.html',
})
export class DetailsPokemonComponent implements OnInit {
  
  constructor(private route: ActivatedRoute, private router: Router){ }

  private pokemonList: Pokemon[];
  selectedPokemon: Pokemon|undefined;
  title: string = "Détails de Pokémon";

  ngOnInit(): void{
    const pokemonId: string|null = this.route.snapshot.paramMap.get('id');
    this.pokemonList = POKEMONS;
    
    if(pokemonId){
      this.selectedPokemon = this.pokemonList.find(pokemon => pokemon.id == +pokemonId)
    }
  }

  goToPokemonList(){
    this.router.navigate(['pokemons']);
  }

}
