import * as types from '../constants';

export interface BasketState {
  list: string[]
}


const defaultState: BasketState = {
   list: []
};

export default function basket(state = defaultState, action: any) {
  switch (action.type) {
    case types.ADD_PRODUCT_TO_BASKET:
      return state;
    default:
      return state
  }
}