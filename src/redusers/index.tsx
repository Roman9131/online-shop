import { combineReducers } from 'redux';

import { cart, CartState } from './cart';
import { productsList, IProductListState} from './productsList';
import { productDetails, IProductDetailsState } from './productDetails';

// The top-level redux state
export interface IStore {
  cart: CartState;
  productsList: IProductListState;
  productDetails: IProductDetailsState;
}

const reducers = combineReducers<IStore>({ cart, productsList, productDetails });

export default reducers;
