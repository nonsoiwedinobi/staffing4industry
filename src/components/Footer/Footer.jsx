import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer section">
      <div className="footer-center container">
        <div className="footer-left">
          <h3 className="footer-logo">Staffing4Industry</h3>
          <p>Location: </p>
          <p className="footer-address">
            Mercatorstraat 132, 2018 , Antwerpen, Belgium
          </p>
          <div className="footer-contact">
            <p>Contact:</p>
            <p>+32465220659</p>
            <p>info@staffing4industry.com</p>
          </div>
          <div className="social-icons">
            <a href="https://www.facebook.com/staffing4industry/">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com/staffing4industry/">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://twitter.com/staffing4industry">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.linkedin.com/company/staffing4industry/">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://www.youtube.com/channel/UCB23323232">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
        <div className="footer-right">
          <ul className="footer-list footer-list-1">
            <li>
              <a href="about.html">About us</a>
            </li>
            <li>
              <a href="about.html">Services</a>
            </li>
            <li>
              <a href="about.html">Jobs</a>
            </li>
            <li>
              <a href="about.html">Contact us</a>
            </li>
            <li>
              <a href="about.html">FAQs</a>
            </li>
          </ul>
          <ul className="footer-list footer-list-2">
            <li>
              <a href="about.html">Blog</a>
            </li>
            <li>
              <a href="about.html">Testimonials</a>
            </li>
            <li>
              <a href="about.html">Careers</a>
            </li>
            <li>
              <a href="about.html">Partners</a>
            </li>
            <li>
              <a href="about.html">Resources</a>
            </li>
          </ul>
        </div>
        <div className="line"></div>
        <p className="footer-copy">© 2024 Staffing4Industry.</p>
      </div>
    </footer>
  );
};

export default Footer;
