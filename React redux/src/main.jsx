import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import Products from "./features/Products/Products.Layout.jsx";
import MyCart from "./features/Cart/Cart.Layout.jsx";
import ProductsV2 from "./features/ProductV2/ProductV2.Layout.jsx";
// import Counter from "./features/Counter/Counter.Layout.jsx";
// import Calculator from "./features/Calculator/Calculator.Layout.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    {/* <Counter /> */}
    {/* <Calculator /> */}
    <div style={{ display: "flex", gap: 12 }}>
      <div style={{ flex: "70%" }}>
        <Products />
      </div>
      <div style={{ flex: "30%" }}>
        <ProductsV2 />
      </div>
    </div>
  </Provider>
);
