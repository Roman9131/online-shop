import { Action, Dispatch, AnyAction } from 'redux';
import { AxiosResponse, AxiosError } from 'axios';

import * as types from '../constants';
import { IProductCard } from '../@types/productCard';
import { axiosGetProductsList } from '../api';

export interface IProductsAction {
  type: string;
  list: IProductCard[];
}

export interface IGetProductsList {(): (dispatch: Dispatch) => void; }
export interface IAsyncGetProductsList { (): Action; }
export interface IAsyncGetProductsListError { (error: any): AnyAction; }
export interface IAsyncGetProductsListSuccess { (list: IProductCard[]): IProductsAction; }

export const getProductsList: IGetProductsList  = () => {
  return (dispatch) => {
    dispatch(asyncGetProductsList());
    axiosGetProductsList().then((response: AxiosResponse<IProductCard[]>) => {
      dispatch(asyncGetProductsListSuccess(response.data));
    }).catch((error: AxiosError) => {
      dispatch(asyncGetProductsListError(error.message));
    });
  };
};

export const asyncGetProductsList: IAsyncGetProductsList = () => ({
  type: types.ASYNC_GET_PRODUCTS_LIST,
});

export const asyncGetProductsListSuccess: IAsyncGetProductsListSuccess = list => ({
  list,
  type: types.ASYNC_GET_PRODUCTS_LIST_SUCCESS,
});

export const asyncGetProductsListError: IAsyncGetProductsListError = error => ({
  error,
  type: types.ASYNC_GET_PRODUCTS_LIST_ERROR,
});
