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
      this.selectedPokemon = this.pokemonService.getPokemonById(+pokemonId);
    }
  }

  goToPokemonList(){
    this.router.navigate(['pokemons']);
  }

}