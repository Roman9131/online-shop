import { Reducer } from 'redux';

import * as types from '../constants';

export interface CartState {
  list: string[];
}

const defaultState: CartState = {
  list: [],
};

export const cart: Reducer<CartState> = (state = defaultState, action) => {
  switch (action.type) {
    case types.ADD_PRODUCT_TO_CART:
      return state;
    default:
      return state;
  }
};
