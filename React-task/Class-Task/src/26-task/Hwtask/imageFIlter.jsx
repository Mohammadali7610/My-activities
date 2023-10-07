import { useEffect, useState } from "react";
import "./style.css"
function ImageFilterApp() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState("none");

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };
  
  useEffect(() => {
    if (selectedImage) {
      const imageElement = document.getElementById("filtered-image");
      imageElement.style.filter = "none";

      if (filter === "blackAndWhite") {
        imageElement.style.filter = "grayscale(100%)";
      } else if (filter === "sepia") {
        imageElement.style.filter = "sepia(100%)";
      } else if (filter === "invert") {
        imageElement.style.filter = "invert(100%)";
      } else if (filter === "blur") {
        imageElement.style.filter = "blur(5px)";
      } else if (filter === "brightness") {
        imageElement.style.filter = "brightness(150%)";
      } else if (filter === "contrast") {
        imageElement.style.filter = "contrast(150%)";
      } else if (filter === "hueRotate") {
        imageElement.style.filter = "hue-rotate(90deg)";
      } else if (filter === "none") {
        imageElement.style.filter = "none";
      } 
    }
  }, [selectedImage, filter]);


  return (
    <div className="image-filter-app">
      {selectedImage === null ? (
          <div>
            <h1>Image Filter App</h1>
          < input type="file" onChange={handleImageChange} />
        </div>
      ) : null}
      <div className="filters_container">
        <div className="Image-filters">
          <img
            src={selectedImage}
            style={{ filter: "grayscale(100%)" }}
            alt=""
            onClick={() => setFilter("blackAndWhite")}
          />
        </div>
        <div className="Image-filters">
          <img
            src={selectedImage}
            style={{ filter: "sepia(100%)" }}
            onClick={() => setFilter("sepia")}
          />
        </div>
        <div className="Image-filters">
          <img
            src={selectedImage}
            style={{ filter: "invert(100%)" }}
            alt=""
            onClick={() => setFilter("invert")}
          />
        </div>
        <div className="Image-filters">
          <img
            src={selectedImage}
            style={{ filter: "brightness(200%)" }}
            onClick={() => setFilter("brightness")}
          />
        </div>
        <div className="Image-filters">
          <img
            src={selectedImage}
            style={{ filter: "blur(5px)" }}
            alt=""
            onClick={() => setFilter("blur")}
          />
        </div>
        <div className="Image-filters">
          <img
            src={selectedImage}
            style={{ filter: "contrast(150%)" }}
            onClick={() => setFilter("contrast")}
          />
        </div>
        <div className="Image-filters">
          <img
            src={selectedImage}
            style={{ filter: "hue-Rotate(90deg)" }}
            alt=""
            onClick={() => setFilter("hueRotate")}
          />
        </div>
        <div className="Image-filters">
          <img
            src={selectedImage}
            style={{ filter: "none" }}
            onClick={() => setFilter("none")}
          />
        </div>
      </div >
      {selectedImage && (
        <div>
          <h2>Original Image</h2>
          <img className="filtered-image" id="filtered-image" src={selectedImage} alt="Original" />
        </div>
      )}
    </div>
  );
}

export default ImageFilterApp;
