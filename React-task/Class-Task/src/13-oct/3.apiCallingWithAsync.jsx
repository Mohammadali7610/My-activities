import { useEffect, useState } from "react";
import axios from "axios";

const APICallingWithAsync = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
        console.log(response)
    } catch (error) {
        console.error("err:", error);
    }
};

fetchData();
}, []);

console.log(products)
  return (
    <div>
     {products ? (
        <div>
          <h2>Products:</h2>
          <ul>
            {products.map(product => (
              <li key={product.id}>{product.title}</li>
            ))}
          </ul>
        </div>
      ) : (
        <div>
          <h3>Hurry up!</h3>
        </div>
      )}
    </div>
  );
};

export default APICallingWithAsync;
