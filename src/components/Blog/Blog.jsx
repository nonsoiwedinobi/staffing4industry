import React from "react";
import "./Blog.css";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";

const Blog = () => {
  return (
    <div className="blog section">
      <div className="blog-center container">
        <h4>Blog</h4>
        <h2>Latest articles</h2>
        <div className="blog-posts">
          <div className="blog-post">
            <div className="blog-image">
              <img src={img1} alt="blog post 1" />
            </div>
            <div className="blog-content">
              <div className="blog-meta">
                <span className="read-time">4 min read</span>
                <span className="post-date">28 Jun 2024</span>
              </div>
              <h4 className="blog-title">Industrialization and its effects</h4>
              <p className="blog-text">
                Did you know that 80% blablabla...Did you know that 80%
                blablabla...
              </p>
              <a href="#">Read More</a>
            </div>
          </div>
          <div className="blog-post">
            <div className="blog-image">
              <img src={img2} alt="blog post 2" />
            </div>
            <div className="blog-content">
              <div className="blog-meta">
                <span className="read-time">5 min read</span>
                <span className="post-date">30 Jun 2024</span>
              </div>
              <h4 className="blog-title">Sustainable Engineering</h4>
              <p className="blog-text">
                Discover the latest trends...Discover the latest trends...
              </p>
              <a href="#">Read More</a>
            </div>
          </div>
          <div className="blog-post">
            <div className="blog-image">
              <img src={img3} alt="blog post 3" />
            </div>
            <div className="blog-content">
              <div className="blog-meta">
                <button className="read-time">3 min read</button>
                <span className="post-date">25 Jun 2024</span>
              </div>
              <h4 className="blog-title">Tech Innovations in 2024</h4>
              <p className="blog-text">
                Explore the cutting-edge...Explore the cutting-edge...
              </p>
              <a href="#">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
