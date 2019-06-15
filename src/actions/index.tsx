import * as types from '../constants';
import { Action } from 'redux';

// Common
export type ActionWithData<D> = Action & {data: D};
//Error
export type ErrorAction = Action & {error: Error};


export function addProductToBasket(id: string): ActionWithData<string> {
  return {
    type: types.ADD_PRODUCT_TO_BASKET,
    data: id,
  };
}