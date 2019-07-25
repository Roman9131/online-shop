import { Reducer } from 'redux';

import * as types from '../constants';
import { IProductCard } from '../@types/productCard';

export interface ISelectedProductList {
  product: IProductCard;
  quantityOfProduct: number;
}

export interface CartState {
  selectedProductsList: ISelectedProductList[];
}

const defaultState: CartState = {
  selectedProductsList: [],
};

export const cart: Reducer<any> = (state = defaultState, action) => {
  switch (action.type) {
    case types.ADD_PRODUCT_TO_CART:
      return {
        ...state,
        selectedProductsList: addToSelectedProductsList(state.selectedProductsList, action.product),
      };
    case types.DELETE_PRODUCT_FROM_CART:
      return {
        ...state,
        selectedProductsList: deleteProductFromSelectedList(state.selectedProductsList, action.id),
      };
    case types.INCREMENT_PRODUCT_ITEM_QUANTITY:
      return {
        ...state,
        selectedProductsList: incrementProductItemQuantity(state.selectedProductsList, action.id),
      };
    case types.DECREMENT_PRODUCT_ITEM_QUANTITY:
      return {
        ...state,
        selectedProductsList: decrementProductItemQuantity(state.selectedProductsList, action.id),
      };
    default:
      return state;
  }
};

function deleteProductFromSelectedList(list: ISelectedProductList[], id: string) {
  return list.filter(item => item.product.id !== id);
}

function addToSelectedProductsList(list: ISelectedProductList[], product: IProductCard) {
  const selectedItem: ISelectedProductList = { product, quantityOfProduct: 1 };
  if (list.length !== 0) return [...list, selectedItem];
  return [selectedItem];
}

function incrementProductItemQuantity(list: ISelectedProductList[], id: string) {
  const selectedItem: ISelectedProductList | undefined = list.find(item => item.product.id === id);
  if (selectedItem !== undefined) selectedItem.quantityOfProduct =  selectedItem.quantityOfProduct + 1;
  return list;
}

function decrementProductItemQuantity(list: ISelectedProductList[], id: string) {
  const selectedItem: ISelectedProductList | undefined = list.find(item => item.product.id === id);
  if (selectedItem !== undefined) selectedItem.quantityOfProduct =  selectedItem.quantityOfProduct - 1;
  return list;
}
