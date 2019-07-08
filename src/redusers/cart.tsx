import { Reducer } from 'redux';

import * as types from '../constants';
import { IProductCard } from '../@types/productCard';

export interface CartState {
  list: IProductCard[];
}

const defaultState: CartState = {
  list: [],
};

export const cart: Reducer<CartState> = (state = defaultState, action) => {
  switch (action.type) {
    case types.ADD_PRODUCT_TO_CART:
      return {
        ...state,
        list:  [...state.list, action.product],
      };
    default:
      return state;
  }
};
