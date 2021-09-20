import { call, all } from "redux-saga/effects";
import { loadMyCryptosWatcher } from "./cryptosSaga";

export default function* rootWatchers() {
  yield all([
    call(loadMyCryptosWatcher)
  ]);
}
