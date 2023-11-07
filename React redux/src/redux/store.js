import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "../features/Counter/Counter.Slice";
import CalculatorSlice from "../features/Calculator/Calculator.Slice";
const store = configureStore({
  reducer: {
    Counter: CounterSlice,
    Calculator: CalculatorSlice,
  },
});

export default store;
