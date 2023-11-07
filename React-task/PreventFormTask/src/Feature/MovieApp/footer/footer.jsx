import { useState } from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import FireIconBlack from "../footer/assets/FireIconBlack.png";
import FireIconWhite from "../footer/assets/FireIconWhite.png";

const Footer = () => {
  const [isTrendingClicked, setIsTrendingClicked] = useState(false);
  const [isMovieClicked, setIsMovieClicked] = useState(false);
  const [isSeriesClicked, setIsSeriesClicked] = useState(false);

  const handleTrendingClick = () => {
    console.log("Trending link clicked", isTrendingClicked);
    setIsTrendingClicked(true);
  };

  const handleMovieClick = () => {
    console.log("Movie link clicked", isMovieClicked);
    setIsMovieClicked(true);
  };

  const handleSeiresClick = () => {
    console.log("Series link clicked", isSeriesClicked);
    setIsSeriesClicked(true);
  };

  const linkStyles = {
    textDecoration: "none",
    backgroundColor: isTrendingClicked ? "white" : "#000",
    color: isTrendingClicked ? "#000" : "#fff",
    borderRadius: isTrendingClicked ? "10px" : "10px",
    fill: isTrendingClicked ? "#000" : "#fff",
    marginTop: "4px",
    marginBottom: "4px",
  };

  const movieStyles = {
    textDecoration: "none",
    backgroundColor: isMovieClicked ? "white" : "#000",
    color: isMovieClicked ? "#000" : "#fff",
    borderRadius: isMovieClicked ? "10px" : "10px",
    fill: isMovieClicked ? "#000" : "#fff",
    marginTop: "4px",
    marginBottom: "4px",
  };
   
  const seriesStyles = {
    textDecoration: "none",
    backgroundColor: isSeriesClicked ? "white" : "#000",
    color: isSeriesClicked ? "#000" : "#fff",
    borderRadius: isSeriesClicked ? "10px" : "10px",
    fill: isSeriesClicked ? "#000" : "#fff",
    marginTop: "4px",
    marginBottom: "4px",
  };
  return (
    <footer className="footer">
      <div className="footerDiv">
        <Link to="/" style={linkStyles} onClick={handleTrendingClick}>
          <p>
            {isTrendingClicked ? (
              <img src={FireIconBlack} width="25px" alt="img" />
            ) : (
              <img src={FireIconWhite} width="25px" />
            )}
            Trending
          </p>
        </Link>
        <Link to="/movies" style={movieStyles} onClick={handleMovieClick}>
          <p>Movies</p>
        </Link>
        <Link to="/series" style={seriesStyles} onClick={handleSeiresClick}>
          <p>Series</p>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
