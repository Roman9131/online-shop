import { call, put, takeLatest } from 'redux-saga/effects'

import * as types from '../constants';
import * as productsActions from '../actions';
import { axiosGetProductsList } from '../api'

function* fetchProductsList() {
  try {
    const res = yield call(axiosGetProductsList);
    if (res.data) {
      yield put(productsActions.asyncGetProductsListSuccess(res.data));
    }
  } catch (error) {
    yield put(productsActions.asyncGetProductsListError(error));
  }
}

function* rootSaga() {
  yield takeLatest(types.ASYNC_GET_PRODUCTS_LIST, fetchProductsList);
}

export default rootSaga;
