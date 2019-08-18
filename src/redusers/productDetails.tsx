import { Reducer } from 'redux';

import * as types from '../constants';
import { IProductCard } from '../@types/productCard';

export interface IProductDetailsState {
  productDetailsItem?: IProductCard;
}

const defaultState: IProductDetailsState = {
  productDetailsItem: undefined,
};

export const productDetails: Reducer<IProductDetailsState> = (state = defaultState, action) => {
  switch (action.type) {
    case types.SET_PRODUCTS_TO_DETAILS:
      return {
        ...state,
        productDetailsItem: action.productDetailsItem
      };
    default:
      return state;
  }
};
