import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
})
export class PokemonFormComponent implements OnInit {
  
  @Input() pokemon: Pokemon;
  pokemonTypes: string[];
  

  constructor(private pokemonService: PokemonService){ }

  ngOnInit(): void {
    this.pokemonTypes = this.pokemonService.getPokemonTypeList();
  }

  hasType(type: string): boolean{
    return this.pokemon.types.includes(type);
  }

  selectType($event: Event, type: string): void {
    const isChecked = ($event.target as HTMLInputElement).checked;

    if(isChecked){
      this.pokemon.types.includes(type)
    }
  }
 
  onSubmit(){

  }
  
}
