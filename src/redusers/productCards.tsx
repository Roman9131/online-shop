import * as types from '../constants';
import {ProductCardsState} from '../interface/productCardsState';

const defaultState: ProductCardsState = {
  cardsList: {
    list: [],
    isLoading: false,
    error: false,
  },
};

export default function productCards(state = defaultState, action: any) {
  switch (action.type) {
    case types.REQUEST_PRODUCT_CARDS_LIST:
      return {
        ...state.cardsList,
        isLoading: true,
      };
    case types.RECEIVE_PRODUCT_CARDS_LIST:
      return {
        ...state.cardsList,
        isLoading: false,
        list: action.data
      };
    case types.REJECT_PRODUCT_CARDS_LIST:
      return {
        ...state.cardsList,
        isLoading: false,
        error: action.error
      };
    default:
      return state
  }
}