import React from "react";
import "./Latest.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faSackDollar } from "@fortawesome/free-solid-svg-icons";

const Categories = () => {
  return (
    <section className="latest section">
      <div className="latest-jobs-center container">
        <h2 className="latest-text">Latest jobs</h2>
        <div className="jobs">
          <div className="job">
            <div className="job-header">
              <button className="job-title">Engineering</button>
              <p className="job-date">28/06/2024</p>
            </div>
            <h4 className="job-role">Reliability Engineer</h4>
            <p className="job-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              tincidunt in nunc molestie pulvinar. Mauris vitae pretium mauris.
              Pellentesque cursus.
            </p>
            <div className="job-buttons">
              <button className="job-btn">
                <FontAwesomeIcon icon={faSackDollar} className="icon" />
                €3000
              </button>
              <button className="job-btn">
                <FontAwesomeIcon icon={faLocationDot} className="icon" />
                Belgium
              </button>
              <button className="job-btn">
                <FontAwesomeIcon icon={faBriefcase} className="icon" />
                Permanent
              </button>
            </div>
            <a className="job-details">
              Job details <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </div>
          <div className="job">
            <div className="job-header">
              <button className="job-title">Engineering</button>
              <p className="job-date">28/06/2024</p>
            </div>
            <h4 className="job-role">Reliability Engineer</h4>
            <p className="job-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              tincidunt in nunc molestie pulvinar. Mauris vitae pretium mauris.
              Pellentesque cursus.
            </p>
            <div className="job-buttons">
              <button className="job-btn">
                <FontAwesomeIcon icon={faSackDollar} className="icon" />
                €3000
              </button>
              <button className="job-btn">
                <FontAwesomeIcon icon={faLocationDot} className="icon" />
                Belgium
              </button>
              <button className="job-btn">
                <FontAwesomeIcon icon={faBriefcase} className="icon" />
                Permanent
              </button>
            </div>
            <a className="job-details">
              Job details <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </div>
          <div className="job">
            <div className="job-header">
              <button className="job-title">Engineering</button>
              <p className="job-date">28/06/2024</p>
            </div>
            <h4 className="job-role">Reliability Engineer</h4>
            <p className="job-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              tincidunt in nunc molestie pulvinar. Mauris vitae pretium mauris.
              Pellentesque cursus.
            </p>
            <div className="job-buttons">
              <button className="job-btn">
                <FontAwesomeIcon icon={faSackDollar} className="icon" />
                €3000 
              </button>
              <button className="job-btn">
                <FontAwesomeIcon icon={faLocationDot} className="icon" />
                Belgium
              </button>
              <button className="job-btn">
                <FontAwesomeIcon icon={faBriefcase} className="icon" />
                Permanent
              </button>
            </div>
            <a className="job-details">
              Job details <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </div>
          {/* <div className="job">
            <p>Job 4</p>
          </div>
          <div className="job">
            <p>Job 5</p>
          </div>
          <div className="job">
            <p>Job 6</p>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Categories;
