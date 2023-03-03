import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { Router } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
})
export class ListPokemonComponent implements OnInit {
  
  pokemonList: Pokemon[];
  
  constructor(
    private router: Router, 
    private pokemonService: PokemonService){

  }
  ngOnInit(): void {
    this.pokemonService.getPokemonList()
    .subscribe(PokemonList => this.pokemonList = PokemonList);
  }

  goToPokemonDetails(pokemonId: number): void{
    this.router.navigate(['pokemon', pokemonId]);
  }

}
