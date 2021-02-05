import { all } from "redux-saga/effects";

import { default as counterSagas } from "./counterSagas";
import { default as helloSagas } from "./helloSagas";
import { default as logSagas } from "./logSagas";

export default function* rootSaga() {
  yield all([...counterSagas, ...helloSagas, ...logSagas]);
}
