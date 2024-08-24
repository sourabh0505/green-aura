import React from "react";
import "./mustWatch.css";

function MustWatch() {
  return (
    <div className="must-watch-container">
      <h1>Must Watch</h1>

      <div className="must-watch-video-container">
        <div className="embed-video-div">
          <iframe
            className="iframe-embed"
            src="https://www.youtube.com/embed/SD9yVca6hHI"
            allow="accelerometer; autoplay; clipboard-write; encrypt-media; gyroscope; picture-in-picture"
            allowFullScreen
            frameborder="0"
            title="Youtube Video 1"
          ></iframe>

          <p className="must-watch-title">
            <b>How Many Fossils to Go an Inch? (ft. Robert Krulwich)</b>
          </p>
        </div>

        <div className="embed-video-div">
          <iframe
            className="iframe-embed"
            src="https://www.youtube.com/embed/yiw6_JakZFc"
            allow="accelerometer; autoplay; clipboard-write; encrypt-media; gyroscope; picture-in-picture"
            allowFullScreen
            frameborder="0"
            title="Youtube Video 2"
          ></iframe>

          <p className="must-watch-title">
            <b>Can YOU Fix Climate Change?</b>
          </p>
        </div>

        <div className="embed-video-div">
          <iframe
            className="iframe-embed"
            src="https://www.youtube.com/embed/cfXHGTwBia4"
            allow="accelerometer; autoplay; clipboard-write; encrypt-media; gyroscope; picture-in-picture"
            allowFullScreen
            frameborder="0"
            title="Youtube Video 3"
          ></iframe>

          <p className="must-watch-title">
            <b>Top 5 climate change myths</b>
          </p>
        </div>

        <div className="embed-video-div">
          <iframe
            className="iframe-embed"
            src="https://www.youtube.com/embed/NCPTbfQyMt8"
            allow="accelerometer; autoplay; clipboard-write; encrypt-media; gyroscope; picture-in-picture"
            allowFullScreen
            frameborder="0"
            title="Youtube Video 3"
          ></iframe>

          <p className="must-watch-title">
            <b>Is the weather actually becoming more extreme? - R. Saravanan</b>
          </p>
        </div>

        <div className="embed-video-div">
          <iframe
            className="iframe-embed"
            src="https://www.youtube.com/embed/UVf2Yw7uFoE"
            allow="accelerometer; autoplay; clipboard-write; encrypt-media; gyroscope; picture-in-picture"
            allowFullScreen
            frameborder="0"
            title="Youtube Video 3"
          ></iframe>

          <p className="must-watch-title">
            <b>Global renewables: Pioneering the energy transition</b>
          </p>
        </div>

        <div className="embed-video-div embed-video-div-6">
          <iframe
            className="iframe-embed"
            src="https://www.youtube.com/embed/pEt6-jA2UE4"
            allow="accelerometer; autoplay; clipboard-write; encrypt-media; gyroscope; picture-in-picture"
            allowFullScreen
            frameborder="0"
            title="Youtube Video 3"
          ></iframe>

          <p className="must-watch-title">
            <b>Climate change - Averting catastrophe</b>
          </p>
        </div>
      </div>
    </div>
  );
}

export default MustWatch;
