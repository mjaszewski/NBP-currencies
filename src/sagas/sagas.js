import * as currenciesActions from '../actions/currencies';
import {call, put, takeEvery, all} from 'redux-saga/effects'

export function* getCurrenciesData(action) {
    try {
        const response = yield call(fetch, `http://api.nbp.pl/api/exchangerates/tables/${action.payload}/?format=json`);
        const data = yield response.json();
        yield put(currenciesActions.getDataCurrenciesDone(data, action.payload));
    } catch (e) {
        yield put(currenciesActions.getDataCurrenciesFailed(e));
    }
}

export function* getDataSaga() {
    yield all([
        takeEvery(currenciesActions.GET_DATA_REQUESTED, getCurrenciesData),
    ]);
}