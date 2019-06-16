import * as types from '../constants';
import {Action} from 'redux';
import axios from 'axios';

// Common
export type ActionWithData<D> = Action & {data: D};
//Error
export type ErrorAction = Action & {error: string};


export function getProductCardsList(): void {
  return dispatch => {
    dispatch(requestProductCardsList());

    axios(types.CONTRACTS_BREACH_CODES_SERVICE_URL)
      .then((data: any) => {
          dispatch(receiveProductCardsList(data))
        }
      ).catch((error: any) => {
      dispatch(rejectProductCardsList(error))
    });
  }
}

export function requestProductCardsList(): Action {
  return {
    type: types.ADD_PRODUCT_TO_BASKET,
  };
}

export function receiveProductCardsList(list: any[]): ActionWithData<any[]> {
  return {
    type: types.ADD_PRODUCT_TO_BASKET,
    data: list,
  };
}

export function rejectProductCardsList(error: any): ErrorAction {
  return {
    type: types.ADD_PRODUCT_TO_BASKET,
    error: error,
  };
}

export function addProductToBasket(id: string): ActionWithData<string> {
  return {
    type: types.ADD_PRODUCT_TO_BASKET,
    data: id,
  };
}