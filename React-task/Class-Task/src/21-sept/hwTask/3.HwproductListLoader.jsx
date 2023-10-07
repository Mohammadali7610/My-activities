import { useEffect, useState } from "react";
import { RingLoader } from "react-spinners";

const HwProductListLoader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [search,setSearch] = useState("")
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((data) => {
        setIsLoading(false);
        setProducts(data);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
    }, []);

    const onChangeFuction = (e) =>{
        setSearch(e.target.value)    
    }
    const onClickFunction = () => {
      const filtered = products.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredProducts(filtered);
    };
  
    console.log("Re-Render: ", isLoading,filteredProducts);

  return (
    <div>
      <div style={{display:"flex",justifyContent:"center"}}>
        <input type="search" value={search} onChange={onChangeFuction}/>
        <button onClick={onClickFunction}>search</button>
      </div>
      <ol style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        {isLoading ? (
          <RingLoader color="skyblue" size="200px" style={{position:"absolute",top:"300px",left:"600px"}} />
        ) : (
          (filteredProducts.length  ? filteredProducts : products).map((item) => {
            return (
              <li style={{ width: 140 }} key={item.id}>
                <img width={70} height={70} src={item.image} />
                <p style={{ fontSize: 11 }} key={item.id}>
                  {item.title}
                </p>
              </li>
            );
          })
        )}
      </ol>
    </div>
  );
};
export default HwProductListLoader;
