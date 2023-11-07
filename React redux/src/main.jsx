import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import Counter from "./features/Counter/Counter.Layout.jsx";
import Calculator from "./features/Calculator/Calculator.Layout.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    {/* <Counter /> */}
    <Calculator />
  </Provider>
);
