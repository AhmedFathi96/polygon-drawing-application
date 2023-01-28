import {  takeEvery, put, all , fork } from "redux-saga/effects";
import { setInitialPoint } from "../../slices/canvas/canvasSlice";
import { addInitPointActions, addInitPointActionTypes } from "./actions";

export function* setInitialPointSaga({initPoint }: addInitPointActions) {
  try {
    
    console.log("initPoint=============================>",initPoint)
    yield put(setInitialPoint(initPoint));
  } catch (e) {
    yield put({ type: "ADD_INIT_POINT_FAILED" });
  }
}

function* watchSetInitialPoint() {
  yield takeEvery(addInitPointActionTypes.ADD_INIT_POINT, setInitialPointSaga);
}

export default function* initialPointSaga() {
  yield all([fork(watchSetInitialPoint)]);
}
