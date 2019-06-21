import { Action, Dispatch } from 'redux';
import { AxiosResponse, AxiosError } from 'axios';

import * as types from '../constants';
import { IProductCard } from '../@types/productCard';
import { ActionWithData, ErrorAction } from './index';
import { axiosGetProductsList } from '../api';

export function getProductsList() {
  return (dispatch: Dispatch) => {
    dispatch(asyncGetProductsList());
    axiosGetProductsList().then((response: AxiosResponse<IProductCard[]>) => {
      dispatch(asyncGetProductsListSuccess(response.data));
    }).catch((error: AxiosError) => {
      dispatch(asyncGetProductsListError(error.message));
    });
  };
}

export function asyncGetProductsList(): Action {
  return {
    type: types.ASYNC_GET_PRODUCTS_LIST,
  };
}

export function asyncGetProductsListSuccess(list: IProductCard[]): ActionWithData<IProductCard[]> {
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
