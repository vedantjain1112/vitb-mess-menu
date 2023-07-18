import React from "react";
import "./images.css";
import Image1 from "./images/image1.jpg";
import Image2 from "./images/vitbpl.jpg";
import Image3 from "./images/imag2.jpg";
import Image4 from "./images/small.jpeg";
import Image5 from "./images/lion.jpeg";
import Image6 from "./images/students.jpeg";

function Image() {
  return (
    <div>
      <div className="image-container">
        <img src={Image2} alt="logo" />
        <img src={Image1} alt="academic_block" />
        <img src={Image3} alt="students" />
      </div>

      <div className="image-container-small">
        <img src={Image4} alt="logo" />
        <img src={Image5} alt="lion" />
        <img src={Image6} alt="students" />
      </div>
    </div>
  );
}

export default Image;
