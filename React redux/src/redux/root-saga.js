import { all, fork } from "redux-saga/effects";
import { watchGetProducts } from "../features/ProductV2/ProductV2.Saga.js";

export default function* rootSaga() {
  yield all([ fork(watchGetProducts)]);
}