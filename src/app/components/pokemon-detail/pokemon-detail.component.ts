import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { PokemonModel } from '../../pokemon-model';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-pokemon-detail',
  standalone: true,
  imports: [NgIf],
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.scss',
})
export class PokemonDetailComponent {
  selectedPokemon: PokemonModel | null = null;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.selectedPokemon$.subscribe((pokemon) => {
      this.selectedPokemon = pokemon;
    });
  }
  statBarPercentage(currentStat: number){
    return (currentStat * 100) / 255

  }
}
