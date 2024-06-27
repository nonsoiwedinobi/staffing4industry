import React from "react";
import "./Efficiency.css";
import efficiency from "../../assets/efficiency.jpg";

const Efficiency = () => {
  return (
    <div className="efficiency section">
      <div className="efficiency-center container">
        <article className="efficiency-info">
          <h2 className="section-title efficiency-title">Efficiency</h2>
          <h3 className="efficiency-text">
            Unlocking Potential, Driving Success for Businesses
          </h3>
          <p className="efficiency-description">
            Our services provide companies with the right talent, enabling them
            to achieve their business and employment goals. With our tailored
            recruitment solutions and affordable pricing, we help businesses
            thrive in a competitive market.
          </p>
          <button className="efficiency-btn">Learn More</button>
        </article>
        <div className="efficiency-img">
          <img src={efficiency} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Efficiency;
