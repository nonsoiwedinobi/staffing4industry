import React from "react";
import "./Specialty.css";
import specialty from "../../assets/specialty.jpg";

const Specialty = () => {
  return (
    <section className="specialties section">
      <div className="specialties-center container">
        <article className="specialties-info">
          <h2 className="section-title specialties-title">
            Specialized recruitment services for industrial, manufacturing,
            chemical, life sciences, and technology sectors.
          </h2>
          <p className="specialties-text">
            At Staffing4Industry, we offer tailored recruitment solutions to
            meet the unique needs of companies in the industrial, manufacturing,
            chemical, life sciences, and technology sectors. Our team of experts
            understands the specific requirements of these industries and works
            diligently to connect businesses with top-notch talent.
          </p>
        </article>
        <div className="specialties-img">
          <img src={specialty} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Specialty;
