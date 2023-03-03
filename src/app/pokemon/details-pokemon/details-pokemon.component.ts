import { Component, OnInit, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';


@Component({
  selector: 'app-details-pokemon',
  templateUrl: './details-pokemon.component.html',
})
export class DetailsPokemonComponent implements OnInit {
  
  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private pokemonService: PokemonService
    ){ }

  selectedPokemon: Pokemon|undefined;
  title: string = "Détails de Pokémon";

  ngOnInit(): void{
    const pokemonId: string|null = this.route.snapshot.paramMap.get('id');
    
    if(pokemonId){
      this.pokemonService.getPokemonById(+pokemonId).subscribe(
        pokemon => this.selectedPokemon = pokemon
      );    
    }
  }

  goToPokemonList(){
    this.router.navigate(['pokemons']);
  }

  goToEditPokemon(pokemon: Pokemon){
    this.router.navigate(['pokemon/edit', pokemon.id]);
  }

}
