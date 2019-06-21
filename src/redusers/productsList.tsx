import * as types from '../constants';
import { Reducer } from 'redux';
import { IProductCard } from '../@types/productCard';

export interface IProductListState {
  list: IProductCard[];
  isLoading: boolean;
  error: boolean;
}

const defaultState: IProductListState = {
  list: [],
  isLoading: false,
  error: false,
};

export const productsList: Reducer<IProductListState> = (state = defaultState, action) => {
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
};
