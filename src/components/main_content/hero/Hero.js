import React from "react";
import "../../../components/css/styles.css";
import hero from "../../../images/hero.jpg";

const Hero = () => {
  return (
    <div className="hero">
      <img className="hero_img" src={hero} alt="" />
      <div className="hero_content">
        <p>Artist</p>
        <h2>
          On Top <br /> Of The World
        </h2>
        <div className="hero_btn">
          <button className="play_btn">PLAY</button>
          <button className="follow_btn">FOLLOW</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
