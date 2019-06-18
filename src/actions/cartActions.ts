import * as types from '../constants';
import { ActionWithData } from './index';

export function addProductToBasket(id: string): ActionWithData<string> {
  return {
    type: types.ADD_PRODUCT_TO_BASKET,
    data: id,
  };
}
