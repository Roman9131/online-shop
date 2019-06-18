import { combineReducers } from 'redux';

import cart from './cart';
import productCards from './productCards';

const reducers = combineReducers({ cart, productCards });

export default reducers;
