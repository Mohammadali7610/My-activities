import { useEffect, useState } from "react";
import axios from "axios";

const APICallingWithThen = () => {
  const [categories, setCategories] = useState(null);
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((catgoriesData) => catgoriesData.json())
      .then((categoriesParsedData) => {
        console.log("categoriesParsedData: ", categoriesParsedData);
        setCategories(categoriesParsedData);
        fetch("https://fakestoreapi.com/products")
          .then((productData) => productData.json())
          .then((productParsedData) => {
            console.log("productParsedData: ", productParsedData);
            setProducts(productParsedData);
          });
      })
      .catch((err) => console.log("Categories Error: ", err));
  }, []);

  /*   useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((categoriesParsedData) => {
        setCategories(categoriesParsedData.data);
        axios
          .get("https://fakestoreapi.com/products")
          .then((productParsedData) => {
            setProducts(productParsedData);
          })
          .catch((err) => console.log("Err: ", err));
      })
      .catch((err) => console.log("Err: ", err));
  }, []); */

  console.log({ products, categories });
  return (
    <div>
      <h1>My Products</h1>
    </div>
  );
};
export default APICallingWithThen;
