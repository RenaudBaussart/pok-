type TypeColorMap = { [key: string]: string };

export const typeColors: TypeColorMap = {
  plante: '#4BD2B2',
  insecte: '#d2fc84',
  électrik: '#FFCE4B',
  feu: '#FC6D6D',
  normal: 'lightgray',
  roche: '#8a7946',
  sol: '#f1d071',
  ténèbre: '#3a3a3a',
  fée: '#f998f6',
  vol: '#98a7f9',
  poison: '#A872FF',
  acier: '#aaaaaa',
  dragon: '#8375bd',
  combat: '#a47c49',
  spectre: '#4950a4',
  glace: '#94f1ee',
  psy: '#f3407f',
  eau: '#76BEFC',
};

export function getTypeColor(type: string): string {
  return typeColors[type] || '#A8A878';
}
