import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { PokemonModel } from '../../pokemon-model';
import { NgIf, NgStyle } from '@angular/common';
import { getTypeColor } from '../../types-colors';

@Component({
  selector: 'app-pokemon-detail',
  standalone: true,
  imports: [NgIf, NgStyle],
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
  statBarPercentage(currentStat: number) {
    return (currentStat * 100) / 255;
  }

  getBackgroundColor(): string {
    if (this.selectedPokemon && this.selectedPokemon.types.length > 0) {
      const primaryType = this.selectedPokemon.types[0].name.toLowerCase();
      return getTypeColor(primaryType);
    }
    return 'white'; // couleur par défaut
  }
}
