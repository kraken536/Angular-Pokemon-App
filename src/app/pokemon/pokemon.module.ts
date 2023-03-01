import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { DetailsPokemonComponent } from './details-pokemon/details-pokemon.component';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { Routes, RouterModule } from '@angular/router';


const pokemonRoutes: Routes = [
  {
    path: 'pokemons', 
    component: ListPokemonComponent
  },
  {
    path: 'pokemon/:id',
    component: DetailsPokemonComponent
  }
]


@NgModule({
  declarations: [
    BorderCardDirective,
    PokemonTypeColorPipe,
    ListPokemonComponent,
    DetailsPokemonComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(pokemonRoutes),
  ]
})
export class PokemonModule { }
