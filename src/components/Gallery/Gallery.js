import React from "react";
import "./gallery.css";
import "./gallery.css";
import image1 from "./image1.jpeg";
import image2 from "./image2.jpeg";
import image3 from "./image3.jpg";
import image4 from "./image4.jpg";
import image5 from "./image5.jpg";
import image6 from "./image6.jpg";
import image7 from "./image7.jpg";
import image8 from "./image8.jpg";

function Gallery() {
  return (
    <div className="galleryContainer">
      <h1>Gallery</h1>

      <div className="galleryimages">
        <img src={image1} alt="image 1" />
        <img src={image2} alt="image 2" />
        <img src={image3} alt="image 3" />
        <img src={image4} alt="image 4" />
        <img src={image5} alt="image 5" />
        <img src={image6} alt="image 6" />
        <img src={image7} alt="image 7" />
        <img src={image8} alt="image 8" />
      </div>
    </div>
  );
}

export default Gallery;
