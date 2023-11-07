import { useEffect, useState } from "react";
import axios from "axios";

const APICallingWithAsync = () => {
  const [categories, setCategories] = useState(null);
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const loadAPIs = async () => {
      try {
        const categoriesData = await axios.get(
          "https://fakestoreapi.com/products/categories"
        );
        // console.log("categoriesData: ", categoriesData);
        setCategories(categoriesData.data);

        const productsData = await axios.get(
          "https://fakestoreapi.com/products"
        );
        setProducts(productsData.data);
      } catch (err) {
        console.log("err:", err);
      }
    };
    loadAPIs();
  }, []);

  console.log({ products, categories });
  return (
    <div>
      <h1>My Products</h1>
    </div>
  );
};
export default APICallingWithAsync;