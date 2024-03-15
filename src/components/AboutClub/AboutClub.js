import Lottie from "lottie-react";
import animationData1 from "./why-animation.json";
import animationData2 from "./features-animation.json";
import animationData3 from "./mission-animation.json";
import React from "react";
import "./aboutClub.css";

function AboutClub() {
  return (
    <div className="aboutClubContainer">
      <div className="why">
        <Lottie className="animatedImages" animationData={animationData1} />

        <p className="aboutTitle">
          <b>Why GreenAura?</b>
        </p>
        <p className="aboutContent">
          Gain knowledge about different methods to protect the environment and
          work towards a sustainable future. Get a customized certificate on the
          completion of quizes.
        </p>
      </div>

      <div className="features">
        <Lottie className="animatedImages" animationData={animationData2} />

        <p className="aboutTitle">
          <b>Key Features</b>
        </p>
        <p className="aboutContent">
          Providing quizes to learn about different methods to protect the
          environment in a fun way like fundamentals of renewable energy,
          photovoltaics systems and smart, and introduction to electric
          vehicles.
        </p>
      </div>

      <div className="mission">
        <Lottie className="animatedImages" animationData={animationData3} />

        <p className="aboutTitle">
          <b>Our Mission</b>
        </p>
        <p className="aboutContent">
          We aim to raise awareness about pressing environmental issues and
          their impact on our world. We provide accessible, science-backed
          information that empowers individuals to take steps toward a more
          sustainable future.
        </p>
      </div>
    </div>
  );
}

export default AboutClub;
