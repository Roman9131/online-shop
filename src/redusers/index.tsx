import { combineReducers } from 'redux';

import basket from './basket';
import productCards from './productCards';

const rootReducer = combineReducers({ basket, productCards });

export default rootReducer;