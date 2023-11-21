import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "./ProductV2.Slice.js";
import { MoonLoader } from "react-spinners";

const ProductsV2 = () => {
  const products = useSelector((state) => state.myProducts);
  const dispatch = useDispatch();

  console.log("1.", products);

  useEffect(() => {
    console.log("2.Use Effect Dispatch");
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div>
      <h1 style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        My Products {products.isLoading && <MoonLoader size={20} />}
      </h1>
      <div>
        <ul>
          {Array.isArray(products.data) &&
            products.data.map((product) => {
              return <li key={product.id}>{product.price}</li>;
            })}
        </ul>
      </div>
    </div>
  );
};

export default ProductsV2;