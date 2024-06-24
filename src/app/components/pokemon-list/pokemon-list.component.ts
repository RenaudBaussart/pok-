import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { NgFor } from '@angular/common';
import { PokemonModel } from '../../pokemon-model';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss',
})
export class PokemonListComponent implements OnInit {
  pokemons: PokemonModel[] = [];
  filteredPokemons: PokemonModel[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getPokemons().subscribe((data) => {
      this.pokemons = data;
      this.filteredPokemons = data;
      console.log(this.pokemons);
    });
  }

  onSelect(pokemon: PokemonModel): void {
    this.apiService.selectPokemon(pokemon);
  }

  onSearch(event: Event) {
    const searchTerm = (event.target as HTMLInputElement).value.toLowerCase();
    this.filteredPokemons = this.pokemons.filter(
      (pokemon) =>
        pokemon.name.fr.toLowerCase().includes(searchTerm) ||
        pokemon.types.some((type) =>
          type.name.toLowerCase().includes(searchTerm)
        )
    );
  }
  GetPokemonType(id: number) {
    return this.pokemons[id].types.map((type: any) => type.name);
  }
  GetPokemonFirstType(id: number) {
    return this.pokemons[id].types[0]?.name;
  }
  GetPokemonImg(id: number) {
    return this.pokemons[id].sprites.regular;
  }
}
