import { useEffect, useState } from "react";

const ProductList = () => {
  const [isLoading, setisLoading] = useState(true);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        // Success
        setisLoading(false);
      })
      .catch((err) => {
        console.log(err);
        // Error
        setisLoading(false);
      });
  }, []);

  console.log("Re-Render: ", isLoading);

  return (
    <div>
      <h1>My Product</h1>
      <div>{isLoading ? <p>Product is loading</p> : <p>Showing Data</p>}</div>
    </div>
  );
};

export default ProductList;
