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
  console.log("4. Request recieved inside getProducts saga");

  try {
    const apiResponse = yield getRequest("https://fakestoreapi.com/products");
    console.log("5.  getProducts saga");

    if (!apiResponse) {
      console.log("5.1  getProducts saga is failed");
      yield put(getProductsFailed());
      return;
    }
    console.log("5.2 getProducts saga is passed");
    yield put(getProductsSuccess({ results: apiResponse }));
  } catch (err) {
    console.log(
      "5.3  getProducts saga is failed & inside catch"
    );
    yield put(getProductsFailed());
  }
}

export function* watchGetProducts() {
  yield takeLatest("productsV2/getProducts", getProducts);
}