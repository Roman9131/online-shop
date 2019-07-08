import * as types from '../constants';
import { IProductCard } from '../@types/productCard';

type CartActionType = {
  type: string;
  product: IProductCard;
};

export interface IAddProductToCart {(product: IProductCard): CartActionType; }

export const addProductToCart: IAddProductToCart = (product: IProductCard) => ({
  product,
  type: types.ADD_PRODUCT_TO_CART,
});
