import * as types from '../constants';
import { ProductCardsState } from '../interface/productCardsState';
import { AnyAction } from 'redux';

const defaultState: ProductCardsState = {
  list: [],
  isLoading: false,
  error: false,
};

export default function productCards(state = defaultState, action: AnyAction) {
  switch (action.type) {
    case types.ASYNC_GET_PRODUCTS_LIST:
      return {
        ...state,
        isLoading: true,
      };
    case types.ASYNC_GET_PRODUCTS_LIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        list: action.data,
      };
    case types.ASYNC_GET_PRODUCTS_LIST_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
}
