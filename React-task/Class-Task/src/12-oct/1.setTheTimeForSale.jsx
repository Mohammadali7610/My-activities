import axios from 'axios';
import  { useState, useEffect } from 'react';

const SaleTime = () => {
  const [data, setData] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://fakestoreapi.com/products');
//         const result = await response.json();
//         setData(result);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    const scheduledTime = new Date();
    scheduledTime.setHours(9, 34, 0);

    const currentTime = new Date();
    const dataFetchingTime = scheduledTime - currentTime;

    if (dataFetchingTime > 0) {
      setTimeout(() => {
        fetchData();
      }, dataFetchingTime);

    }
  }, []);

  return (
    <div>
      {data ? (
        <div>
          <h2>Products:</h2>
          <ul>
            {data.map(product => (
              <li key={product.id}>{product.title}</li>
            ))}
          </ul>
        </div>
      ) : (
        <div>
          <h3>Hurry up!</h3>
          <h5>The sale is on its way!</h5>
        </div>
      )}
    </div>
  );
};

export default SaleTime;
