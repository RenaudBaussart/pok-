import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PokemonModel } from '../pokemon-model';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://tyradex.vercel.app/api/v1/gen/1';

  constructor(private http: HttpClient) {}

  getPokemons(): Observable<PokemonModel[]> {
    return this.http.get<PokemonModel[]>(this.apiUrl);
  }

  selectPokemon(pokemon: PokemonModel): void {
    console.log(pokemon);
  }
}
