import {getDataSaga} from "./sagas";
import {all, fork} from "redux-saga/effects"

export function* rootSaga() {
    yield all([
        fork(getDataSaga)
    ]);
}