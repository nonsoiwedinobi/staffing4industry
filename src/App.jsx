import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Specialty from "./components/Specialty/Specialty";
import Latest from "./components/Latest/Latest";
import Solutions from "./components/Solutions/Solutions";
import Efficiency from "./components/Efficiency/Efficiency";
import Reviews from "./components/Reviews/Reviews";
import Blog from "./components/Blog/Blog";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Specialty />
      <div className="container">
        <specialties-center />
      </div>
      <Latest />
      <div className="container">
        <latest-jobs-center />
      </div>
      <Solutions />
      <div className="container">
        <solutions-center />
      </div>
      <Efficiency />
      <div className="container">
        <efficiency-center />
      </div>
      <Reviews />
      <div className="container">
        <reviews-center />
      </div>
      <Blog />
      <div className="container">
        <blog-center />
      </div>
      <Footer />
    </div>
  );
};

export default App;
