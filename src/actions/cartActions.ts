import * as types from '../constants';
import { Action } from 'redux';

import { IProductCard } from '../@types/productCard';

interface CartProductActionType extends Action {
  product: IProductCard;
}

interface CartProductIdActionType extends Action {
  id: string;
}

export interface IAddProductToCart {(product: IProductCard): CartProductActionType; }
export interface IDeleteProductFromCart {(id: string): CartProductIdActionType; }
export interface IProductQuantityIncrement {(id: string): CartProductIdActionType; }
export interface IDecrementProductQuantity {(id: string): CartProductIdActionType; }

export const addProductToCart: IAddProductToCart = product => ({
  product,
  type: types.ADD_PRODUCT_TO_CART,
});

export const deleteProductFromCart: IDeleteProductFromCart = id => ({
  id,
  type: types.DELETE_PRODUCT_FROM_CART,
});

export const incrementProductQuantity: IProductQuantityIncrement = id => ({
  id,
  type: types.INCREMENT_PRODUCT_ITEM_QUANTITY,
});

export const decrementProductQuantity: IDecrementProductQuantity = id => ({
  id,
  type: types.DECREMENT_PRODUCT_ITEM_QUANTITY,
});
