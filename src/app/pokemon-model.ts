export interface PokemonModel {
  name: {
    fr: string;
  };
  pokedex_id: number;
  types: PokemonType[];
  height: number;
  weight: number;
  sprites: PokemonImage;
}

export interface PokemonType {
  name: string;
}

export interface PokemonImage {
  regular: string;
}
