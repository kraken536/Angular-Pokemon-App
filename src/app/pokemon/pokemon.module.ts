import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { DetailsPokemonComponent } from './details-pokemon/details-pokemon.component';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { Routes, RouterModule } from '@angular/router';
import { PokemonService } from './pokemon.service';
import { FormsModule } from '@angular/forms';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';


const pokemonRoutes: Routes = [
  {
    path: 'pokemon/edit/:id',
    component: EditPokemonComponent
  },
  {
    path: 'pokemon/:id',
    component: DetailsPokemonComponent
  },
  {
    path: 'pokemons', 
    component: ListPokemonComponent
  }
]


@NgModule({
  declarations: [
    BorderCardDirective,
    PokemonTypeColorPipe,
    ListPokemonComponent,
    DetailsPokemonComponent,
    PokemonFormComponent,
    EditPokemonComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(pokemonRoutes),
  ],
  providers: [PokemonService],
})
export class PokemonModule { }
