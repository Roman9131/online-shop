import { combineReducers } from 'redux';

import cart from './cart';
import productCards from './productCards';

const rootReducer = combineReducers({ cart, productCards });

export default rootReducer;
