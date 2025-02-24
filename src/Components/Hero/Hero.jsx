import React from "react";
import { useNavigate } from "react-router-dom";
import "./Hero.css";
import arrow_icon from "../Assets/arrow.png";
import hero_image from "../Assets/hero_image.png";
import hero_2 from "../Assets/hero_2.png";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="hero">
      <div className="hero-left">
        {/* <h2>NEW ARRIVALS ONLY</h2> */}
        <div className="hand-hand-icon">
          <p>Your</p>
          {/* <img src={hand_icon} alt="" /> */}
        </div>
        <p>Style,Our</p>
        <p>Latest Collection </p>
        <div className="hero-latest-btn" onClick={() => navigate("/womens")}>
          <div>Explore the Latest</div>
          <img src={arrow_icon} alt="arrow" />
        </div>
      </div>
      <div className="hero_right">
        <img src={hero_image} alt="hero_image" id="hero1" />
        <img src={hero_2} alt="hero_image" id="hero2" />
      </div>
    </div>
  );
};

export default Hero;
