import { Component } from '@angular/core';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-add-pokemon',
  templateUrl: 'add-pokemon.component.html'
})
export class AddPokemonComponent {

  pokemon: Pokemon;

  ngOnInit(): void {
    this.pokemon = new Pokemon();
  }

}
