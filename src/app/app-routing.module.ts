import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailsPokemonComponent } from './details-pokemon/details-pokemon.component';

const routes: Routes = [
  {
    path: 'pokemons', 
    component: ListPokemonComponent
  },
  {
    path: 'pokemon/:id',
    component: DetailsPokemonComponent
  },
  {
    path: '',
    redirectTo: 'pokemons',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
