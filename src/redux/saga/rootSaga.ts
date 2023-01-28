import { all, fork } from "redux-saga/effects";
import initialPointSaga from "./canvas/addInitPointSaga";

export default function* rootSaga() {
  yield all([fork(initialPointSaga)]);
}
