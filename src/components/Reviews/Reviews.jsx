import React from "react";
import "./Reviews.css";
import man from "../../assets/man.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Reviews = () => {
  return (
    <div className="reviews section">
      <div className="reviews-center container">
        <div className="star-container">
          <span>
            <FontAwesomeIcon icon={faStar} className="star-icon" />
          </span>
          <span>
            <FontAwesomeIcon icon={faStar} className="star-icon" />
          </span>
          <span>
            <FontAwesomeIcon icon={faStar} className="star-icon" />
          </span>
          <span>
            <FontAwesomeIcon icon={faStar} className="star-icon" />
          </span>
          <span>
            <FontAwesomeIcon icon={faStar} className="star-icon" />
          </span>
        </div>
        <p className="reviews-text">
          Working with Staffing4Industry was a game-changer for our company.
          They helped us find the perfect candidate for our engineering team,
          and the whole process was smooth and efficient.
        </p>
        <div className="reviews-details">
          <img src={man} alt="" />
          <div className="reviewer-info">
            <p className="reviewer-name">John Doe</p>
            <p className="reviewer-title">Engineering Manager</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
