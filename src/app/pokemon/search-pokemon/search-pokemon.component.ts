import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { Router } from '@angular/router';
import { Subject, Observable, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html', 
})
export class SearchPokemonComponent implements OnInit {

  /*
    Search terms represente les recherches successives de l'utilisateur 
    dans le champs de recherche.  
  */
  searchTerms = new Subject<string>();
  pokemons$: Observable<Pokemon[]>;
  constructor(
    private router: Router,
    private pokemonService: PokemonService
  ){ }
  
  ngOnInit(): void {
    this.pokemons$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      /*The switchMap will stop the current request and immediately 
      start looking for the new one entered by the user
      */
      switchMap((term) => this.pokemonService.searchPokemonList(term)),
    )
  }

  search(term: string){
    this.searchTerms.next(term);
  }

  goToDetailPokemon(pokemon: Pokemon){
    const link = [`/pokemon/`, pokemon.id];
    this.router.navigate(link);
  }
}
