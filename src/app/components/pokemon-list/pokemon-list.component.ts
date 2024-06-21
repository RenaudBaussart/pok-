import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss',
})
export class PokemonListComponent implements OnInit {
  pokemons: any = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getPokemons().subscribe((data) => {
      this.pokemons = data;
    });
  }
}
