import React from "react";
import "./Solutions.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCube } from "@fortawesome/free-solid-svg-icons";

const Solutions = () => {
  return (
    <div className="solutions section">
      <div className="solutions-center container">
        <h2>Solutions</h2>
        <p className="solutions-text">
          Why Choose Staffing4Industry for Your Recruitment Needs
        </p>
        <p className="solutions-text-2">
          At Staffing4Industry, we offer affordable and tailor-made recruitment
          services with expertise in various industries. Our pricing is 10-20%
          lower than our competitors, ensuring you get the best value for your
          investment.
        </p>
        <div className="solutions-cards">
          <div className="solution-card">
            <span>
              {" "}
              <FontAwesomeIcon icon={faCube} className="cube-icon" />
            </span>
            <h4>Affordable Pricing</h4>
            <p>We provide recruitment services at competitive prices.</p>
          </div>
          <div className="solution-card">
            <span>
              {" "}
              <FontAwesomeIcon icon={faCube} className="cube-icon" />
            </span>
            <h4>Tailor-made Recruitment Services</h4>
            <p>
              Our recruitment services are customized to meet your specific
              needs.
            </p>
          </div>
          <div className="solution-card">
            <span>
              {" "}
              <FontAwesomeIcon icon={faCube} className="cube-icon" />
            </span>
            <h4>Expertise in Various Industries</h4>
            <p>
              We have extensive knowledge and experience in multiple industries.
            </p>
          </div>
        </div>
        <button className="solutions-btn">Learn More</button>
      </div>
    </div>
  );
};

export default Solutions;
