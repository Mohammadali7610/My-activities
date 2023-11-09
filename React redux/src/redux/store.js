import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "../features/Counter/Counter.Slice";
import CalculatorSlice from "../features/Calculator/Calculator.Slice";
import CartSlice from "../features/Cart/Cart.Slice";
const store = configureStore({
  reducer: {
    Counter: CounterSlice,
    Calculator: CalculatorSlice,
    myCart: CartSlice,
  },
});

export default store;
