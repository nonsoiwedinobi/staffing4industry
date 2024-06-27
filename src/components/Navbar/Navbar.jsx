import React, { useEffect, useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`container ${scrolled ? "scrolled" : ""}`}>
      <p className="logo">Staffing4Industry</p>
      <button className="nav-btn" id="nav-btn" onClick={toggleMenu}>
        <i className="fas fa-bars"></i>
      </button>
      <ul className={menuOpen ? "open" : "nav-links" }>
        <li>
          <a href="index.html">Home</a>
        </li>
        <li>
          <a href="jobs.html">Jobs</a>
        </li>
        <li>
          <a href="services.html">Services</a>
        </li>
        <li>
          <a href="about.html">About</a>
        </li>
        <li>
          <a href="contact.html">Contact</a>
        </li>
        <li>
          <button className="btn submit-btn">Submit Resume</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
