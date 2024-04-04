export interface CardList {
  cards: MagicCard[];
}

export interface MagicCard {
  name: string;
  manaCost: string;
  cmc: number;
  colors: string[];
  rarity: string;
  setName: string;
  text: string;
  artist: string;
  number: string;
  imageUrl: string;
  isFavorite: boolean;
  types: string[];
  flavor: string;
  id: string;
}
