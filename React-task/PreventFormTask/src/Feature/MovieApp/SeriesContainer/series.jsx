import { useEffect, useMemo, useState } from "react";
import { RingLoader } from "react-spinners";
import "./series.css"
import Footer from "../footer/footer";

const SeriesCont = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/discover/tv?api_key=ab98c24b78fbc60bda1b7a3636c8e5bb&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false")
      .then((response) => response.json())
      .then((data) => {
        setIsLoading();
        setProducts(data.results);
        console.log(isLoading)
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
console.log(filteredProducts)

  return (
    <div className="SeriesMain">
      <div className="SeriesHeadingDiv">
        <h2 className="SeriesHeading">
          TV Series
        </h2>
      </div>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap",justifyContent:"space-around",padding:"20px" }}>
        {products.length === 0 ? (
            
          <RingLoader color="grey" size={200} />
        ) : (
          products.map((item) => (
            <div className="SeriesMoviesMain"  key={item.id}>
              <div className="SeriesMoviesMainImageDiv">
                <h5 className="SeriesMovieVote">{item.vote_average}</h5>
              <img className="SeriesMoviesMainImage" src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${item.poster_path}`} alt={item.title} />
              </div>
              <div className="SeriesMovieInfo ">
              <p  className="SeriesMoviesMainTittle" >Tittle:{item.name}</p>
              <p  className="SeriesMoviesMainTittle" >Release:{item.first_air_date}</p>
              <p  className="SeriesMoviesMainTittle" >Popularity{item.popularity}</p> 
              </div>
            </div>
          ))
        )}
      </div>
      <Footer />
    </div>
  );
};

export default SeriesCont;
