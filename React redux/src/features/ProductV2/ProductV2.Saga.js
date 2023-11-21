import { put, takeLatest } from "redux-saga/effects";
import { getProductsFailed, getProductsSuccess } from "./ProductV2.Slice";

const getRequest = async (url) => {
  try {
    const response = await fetch(url);
    const parsedResponse = await response.json();
    return parsedResponse;
  } catch (err) {
    return null;
  }
};

function* getProducts() {

  try {
    const apiResponse = yield getRequest("https://fakestoreapi.com/products");

    if (!apiResponse) {
      yield put(getProductsFailed());
      return;
    }
    yield put(getProductsSuccess({ results: apiResponse }));
  } catch (err) {
    yield put(getProductsFailed());
  }
}

export function* watchGetProducts() {
  yield takeLatest("productsV2/getProducts", getProducts);
}