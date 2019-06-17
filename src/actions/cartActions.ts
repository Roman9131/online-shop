import * as types from '../constants';
import { Action } from 'redux';

// Common
type ActionWithData<D> = Action & {data: D};
// Error
type ErrorAction = Action & {error: string};

export function addProductToBasket(id: string): ActionWithData<string> {
  return {
    type: types.ADD_PRODUCT_TO_BASKET,
    data: id,
  };
}
