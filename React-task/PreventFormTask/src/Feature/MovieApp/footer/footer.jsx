import { useState } from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import FireIconBlack from "../footer/assets/FireIconBlack.png";
import FireIconWhite from "../footer/assets/FireIconWhite.png";

const Footer = () => {
  const [isTrendingClicked, setIsTrendingClicked] = useState(false);

  const handleTrendingClick = () => {
    console.log("Trending link clicked", isTrendingClicked);
    setIsTrendingClicked(true);
  };

  const svgColorFunction = {
    fill: isTrendingClicked ? "#000" : "#fff",
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
        <Link to="/movies" style={{ textDecoration: "none" }}>
          <p>Movies</p>
        </Link>
        <Link to="/series" style={{ textDecoration: "none" }}>
          <p>Series</p>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
