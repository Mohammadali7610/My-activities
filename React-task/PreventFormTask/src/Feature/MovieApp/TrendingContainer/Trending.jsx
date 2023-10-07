import { useEffect, useMemo, useState } from "react";
import { RingLoader } from "react-spinners";
import "./Trending.css"
import Footer from "../footer/footer";

const TrendingToday = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/trending/all/day?api_key=26ba5e77849587dbd7df199727859189&page=1")
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        setProducts(data.results);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setIsLoading(false);
      });
  }, []);

  const filteredProducts = useMemo(() => {
    const filteredList = products.filter((item) => {
      const currentWordLC = item.title?.toLowerCase(); 
      return currentWordLC
    });

    return filteredList;
  }, [isLoading, products]);

  return (
    <div className="TrendingMain">
      <div className="TrendingHeadingDiv">
        <h2 className="TrendingHeading">
          Trending...
        </h2>
      </div>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap",justifyContent:"space-around",padding:"20px" }}>
        {isLoading ? (
          <RingLoader color="grey" size={200} />
        ) : (
          filteredProducts.map((item) => (
            <div className="TrendingMoviesMain"  key={item.id}>
              <div className="TrendingMoviesMainImageDiv">
                <h5 className="TrendindMovieVote">{item.vote_average}</h5>
              <img className="TrendingMoviesMainImage" src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${item.poster_path}`} alt={item.title} />
              </div>
              <div className="TrendingMovieInfo ">
              <p  className="TrendingMoviesMainTittle" >Tittle:{item.title}</p>
              <p  className="TrendingMoviesMainTittle" >Release:{item.release_date}</p>
              <p  className="TrendingMoviesMainTittle" >Popularity{item.popularity}</p> 
              </div>
            </div>
          ))
        )}
      </div>
      <Footer />
    </div>
  );
};

export default TrendingToday;
