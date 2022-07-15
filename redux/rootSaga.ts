import { all } from "redux-saga/effects"
import authSaga from "./saga/authSaga";
import musicSaga from "./saga/musicSaga";

function* rootSaga() {
  yield all([
    authSaga(),
    musicSaga()
  ]);
}

export default rootSaga