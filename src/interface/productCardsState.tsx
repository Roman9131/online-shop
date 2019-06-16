export interface ProductCardsState {
  cardsList: CardsList;
}

export interface CardsList {
  list: any[],
  isLoading: boolean,
  error: boolean,
}

