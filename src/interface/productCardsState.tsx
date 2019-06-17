import { ProductCard } from '../model/productCard';

export interface ProductCardsState {
  list: ProductCard[];
  isLoading: boolean;
  error: boolean;
}
