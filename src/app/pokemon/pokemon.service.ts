import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  
  searchPokemonList(term: string): Observable<Pokemon[]>{

    if(term.length <= 1){
      return of([]); //This line will return an empty array for the condition.
    }
    /*
    The condition above is used to reduce the amount of server requests 
    when the search term is not complete.
    */
    return this.httpClient.get<Pokemon[]>(`api/pokemon/?name=${term}`)
    .pipe(
      tap((response)=> this.log(response)),
      catchError(error => this.handleError(error, []))
    );
  }

  updatePokemon(pokemon: Pokemon): Observable<null> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }

    return this.httpClient.put(`api/pokemon`, pokemon, httpOptions).pipe(
      tap(response => this.log(response)),
      catchError(error => this.handleError(error, undefined))
    );
  }

  deletePokemonById(pokemonId: number): Observable<null>{
    return this.httpClient.delete(`api/pokemon/${pokemonId}`).pipe(
      tap(response => this.log(response)),
      catchError(error => this.handleError(error, null))
    );
  }

  addPokemon(pokemon: Pokemon): Observable<Pokemon> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'}) 
    };

    return this.httpClient.post<Pokemon>(`api/pokemon`, pokemon, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError( error => this.handleError(error, null))
    );
  }

  private log(response: any) {
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
