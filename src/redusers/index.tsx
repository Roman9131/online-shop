import { combineReducers } from 'redux';

import { cart } from './cart';
import { productsList } from './productsList';
import { CartState } from './cart';
import { IProductListState } from './productsList';

// The top-level redux state
export interface IStore {
  cart: CartState;
  productsList: IProductListState;
}

const reducers = combineReducers<IStore>({ cart, productsList });

export default reducers;
