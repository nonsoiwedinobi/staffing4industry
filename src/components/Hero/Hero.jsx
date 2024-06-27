import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>Connecting top talent with leading industries</h1>
        <p>
          Your expert recruitment agency in Antwerp, Belgium, connecting
          industrial, manufacturing, chemical, life sciences, and technology
          companies with top engineering, manufacturing, and technical sales
          talent.
        </p>
        <button className="hero-btn-1 btn">
          Find job <FontAwesomeIcon icon={faArrowRight} />
        </button>
        <button className="hero-btn-2 btn">
          Explore more <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
}

export default Hero
