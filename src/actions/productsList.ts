import { Action, AnyAction } from 'redux';

import * as types from '../constants';
import { IProductCard } from '../@types/productCard';

export interface IProductsAction extends Action {
  list: IProductCard[];
}

export interface IAsyncGetProductsList { (): Action; }
export interface IAsyncGetProductsListError { (error: any): AnyAction; }
export interface IAsyncGetProductsListSuccess { (list: IProductCard[]): IProductsAction; }

export const asyncGetProductsList: IAsyncGetProductsList = () => ({
  type: types.ASYNC_GET_PRODUCTS_LIST,
});

export const asyncGetProductsListSuccess: IAsyncGetProductsListSuccess = list => ({
  type: types.ASYNC_GET_PRODUCTS_LIST_SUCCESS,
  list,
});

export const asyncGetProductsListError: IAsyncGetProductsListError = error => ({
  type: types.ASYNC_GET_PRODUCTS_LIST_ERROR,
  error,
});
