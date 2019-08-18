import * as types from '../constants';
import { Action } from 'redux';

import { IProductCard } from '../@types/productCard';

interface CartProductActionType extends Action {
  productDetailsItem: IProductCard;
}

export interface ISetProductToDetails {(product: IProductCard): CartProductActionType; }

export const setProductToDetails: ISetProductToDetails = productDetailsItem => ({
  productDetailsItem,
  type: types.SET_PRODUCTS_TO_DETAILS,
});
