import { call, put, takeLatest } from 'redux-saga/effects'

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
  yield takeLatest(productsActions.asyncGetProductsList, fetchProductsList);
}

export default rootSaga;
