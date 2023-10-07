import { useEffect, useMemo, useState } from "react";
import { RingLoader } from "react-spinners";
import "./Movies.css"
import Footer from "../footer/footer";

const Movies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/discover/movie?api_key=885cbdf8a8917348fb4deea82605a152&language=en-US&sort_by=popularity.desc")
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
    <div className="MoviesMain">
      <div className="MoviesHeadingDiv">
        <h2 className="MoviesHeading">
          Movies
        </h2>
      </div>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap",justifyContent:"space-around",padding:"20px" }}>
        {isLoading ? (
          <RingLoader color="grey" size={200} />
        ) : (
          filteredProducts.map((item) => (
            <div className="MoviesMainContainer"  key={item.id}>
              <div className="MoviesMainImageDiv">
                <h5 className="MovieVote">{item.vote_average}</h5>
              <img className="MoviesMainImage" src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${item.poster_path}`} alt={item.title} />
              </div>
              <div className="MovieInfo ">
              <p  className="MoviesMainTittle" >Tittle:{item.title}</p>
              <p  className="MoviesMainTittle" >Release:{item.release_date}</p>
              <p  className="MoviesMainTittle" >Popularity{item.popularity}</p> 
              </div>
            </div>
          ))
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Movies;
