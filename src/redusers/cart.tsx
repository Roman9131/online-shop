import * as types from '../constants';

export interface CartState {
  list: string[];
}

const defaultState: CartState = {
  list: [],
};

export default function cart(state = defaultState, action: any) {
  switch (action.type) {
    case types.ADD_PRODUCT_TO_BASKET:
      return state;
    default:
      return state;
  }
}
