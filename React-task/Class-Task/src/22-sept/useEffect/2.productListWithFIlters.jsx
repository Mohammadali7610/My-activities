import { useEffect, useState } from "react";
import { PacmanLoader } from "react-spinners";

const ProductListWithFilters = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((data) => {
        //console.log(data);
        // Success
        setIsLoading(false);
        setProducts(data);
        setFilteredProducts(data);
      })
      .catch((err) => {
        console.log(err);
        // Error
        setIsLoading(false);
      });
  }, []);

  //console.log("Re-Render: ", isLoading, products);

  useEffect(() => {
    console.log("Search: ", search);

    const filteredList = products.filter((item) => {
      // item.title.toLowerCase().search(search.toLowerCase())

      const searchLc = search.toLowerCase();
      const currentWordLC = item.title.toLowerCase();

      return currentWordLC.search(searchLc) !== -1;
    });

    console.log("filteredList: ", filteredList);
    setFilteredProducts(filteredList);
  }, [search, products]);

  return (
    <div>
      <h1>My Product</h1>
      <div className="search-box">
        <input
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "16px",
            backgroundColor: "#e9e9e9",
          }}
          type="search"
          placeholder="Search your product"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        {isLoading ? (
          <PacmanLoader color="red" />
        ) : (
          filteredProducts.map((item) => {
            return (
              <div style={{ width: 140 }} key={item.id}>
                <img width={70} height={70} src={item.image} />
                <p style={{ fontSize: 11 }}>{item.title}</p>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default ProductListWithFilters;
