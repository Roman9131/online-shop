import * as types from '../constants';
import { ActionWithData } from './index';

export function addProductToCart(id: string): ActionWithData<string> {
  return {
    type: types.ADD_PRODUCT_TO_CART,
    data: id,
  };
}
