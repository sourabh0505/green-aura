import React from "react";
import "./aboutUs.css";
import profileImage from "./profileImage.jpeg";

function AboutUs() {
  return (
    <div className="aboutUsContainer">
      <h1>About Us</h1>

      <div className="profileImage">
        <div className="imageDiv">
          <img src={profileImage} alt="vaibhav photo" />
        </div>
        <div className="backgroundDiv"></div>
      </div>

      <div className="aboutusContent">
      I selected a tagline Mars is great, but Earth is present, and it makes more sense to save our planet from
      climate catastrophes than to attempt to make any exoplanet habitable. Where would humanity go if
      attempts to colonize Mars prove unsuccessful? I used this query as an inspiration to start motivating the
      next generation of leaders. I educated 1,000 students and am still spreading the word.
      </div>
    </div>
  );
}

export default AboutUs;
