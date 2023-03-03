import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, tap } from 'rxjs';

@Injectable()
export class PokemonService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getPokemonList(): Observable<Pokemon[]> {
    return this.httpClient.get<Pokemon[]>('api/pokemon').pipe(
      tap(response => this.log(response)),
      catchError(error => this.handleError(error, []))
    );
  }

  getPokemonById(pokemonId: number): Observable<Pokemon|undefined> {
    return this.httpClient.get<Pokemon>(`api/pokemon/${pokemonId}`).pipe(
      tap(response => this.log(response)),
      catchError(error => this.handleError(error, undefined))
    );
  }

  private log(response: Pokemon[]|Pokemon|undefined) {
    console.table(response);
  }

  private handleError(error: Error, errorValue: any){
    console.error(error);
    return of (errorValue);
  }

  getPokemonTypeList(): string[] {
    return [
      'Plante', 
      'Feu', 
      'Eau', 
      'Insecte', 
      'Normal', 
      'Electrik', 
      'Poison', 
      'Fée' ,
      'Vol', 
      'Combat',
      'Psy'
    ];
  }
}
