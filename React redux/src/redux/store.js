import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import CounterSlice from "../features/Counter/Counter.Slice";
import CalculatorSlice from "../features/Calculator/Calculator.Slice";
import CartSlice from "../features/Cart/Cart.Slice";
import ProductV2Slice from "../features/ProductV2/ProductV2.Slice";
import rootSaga from "./root-saga";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: {
    Counter: CounterSlice,
    Calculator: CalculatorSlice,
    myCart: CartSlice,
    myProducts: ProductV2Slice
  },
  middleware:(current) => current({thunk:false}).concat(sagaMiddleware,)
});
sagaMiddleware.run(rootSaga);

export default store;
