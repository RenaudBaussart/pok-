export interface PokemonModel {
  name: {
    fr: string;
  };
  pokedex_id: number;
  types: PokemonType[];
  height: number;
  weight: number;
  sprites: PokemonImage;
  stats: stats;
}

export interface PokemonType {
  name: string;
  image: string;
}

export interface PokemonImage {
  regular: string;
}
export interface stats{
  atk: number;
  def: number;
  hp: number;
  spe_atk: number;
  spe_def: number;
  vit: number;
}