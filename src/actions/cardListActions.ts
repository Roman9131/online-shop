import { ProductCard } from '../model/productCard';
import * as types from '../constants';
import axios from 'axios';
import { Action, Dispatch } from 'redux';

// Common
type ActionWithData<D> = Action & {data: D};
// Error
type ErrorAction = Action & {error: string};

export function getProductsList() {
  return (dispatch: Dispatch) => {
    dispatch(asyncGetProductsList());
    axios(types.CONTRACTS_BREACH_CODES_SERVICE_URL)
      .then((data: any) => {
        dispatch(asyncGetProductsListSuccess(data));
      },
      ).catch((error: any) => {
        dispatch(asyncGetProductsListError(error));
      });
  };
}

export function asyncGetProductsList(): Action {
  return {
    type: types.ASYNC_GET_PRODUCTS_LIST,
  };
}

export function asyncGetProductsListSuccess(list: ProductCard[]): ActionWithData<ProductCard[]> {
  return {
    type: types.ASYNC_GET_PRODUCTS_LIST_SUCCESS,
    data: list,
  };
}

export function asyncGetProductsListError(error: string): ErrorAction {
  return {
    error,
    type: types.ASYNC_GET_PRODUCTS_LIST_ERROR,
  };
}
