import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "./ProductV2.Slice.js";
import { ClockLoader } from "react-spinners";

const ProductsV2 = () => {
  const products = useSelector((state) => state.myProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div>
      <h1 style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        My Products {products.isLoading && <ClockLoader size={30} />}
      </h1>
      <div>
        <ol>
          {Array.isArray(products.data) &&
            products.data.map((product) => {
              return (
                <li key={product.id}>
                  <div>{product.title} </div> <div>Price : {product.price}$ </div>
                </li>
              );
            })}
        </ol>
      </div>
    </div>
  );
};

export default ProductsV2;
