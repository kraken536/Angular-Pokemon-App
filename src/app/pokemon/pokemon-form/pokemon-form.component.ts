import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.css'],
})
export class PokemonFormComponent implements OnInit {
  
  @Input() pokemon: Pokemon;
  pokemonTypes: string[];
  types: string[];
  

  constructor(
      private pokemonService: PokemonService,
      private router: Router
    ){ }

  ngOnInit(): void {
    this.types = this.pokemonService.getPokemonTypeList();
    this.pokemonTypes = this.pokemonService.getPokemonTypeList();
  }

  hasType(type: string): boolean{
    return this.pokemon.types.includes(type);
  }

  selectType($event: Event, type: string): void {
    const isChecked: boolean = ($event.target as HTMLInputElement).checked;

    if(isChecked){
      this.pokemon.types.push(type);
    } else {
      const index = this.pokemon.types.indexOf(type);
      this.pokemon.types.splice(index, 1);
    }
  }

  isTypesValid(type: string): boolean{
    if(this.pokemon.types.length == 1 && this.hasType(type)){
      return false;
    } 
    else if(this.pokemon.types.length > 2 && !this.hasType(type)){
      return false;
    }

    return true;
  }

  onSubmit(){
    this.pokemonService.updatePokemon(this.pokemon)
    .subscribe(() => this.router.navigate(['/pokemon', this.pokemon.id]));
  }

  
}
