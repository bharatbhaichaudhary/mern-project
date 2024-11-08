// 


import React from 'react';
import { NavLink } from 'react-router-dom';
import './home.css';

const Home = () => {
  return (
    <section className="hero">
      <div className="content-container">
        {/* Text Content */}
        <div className="text-content">
          <h1>Welcome to Our Platform</h1>
          <p>
            We are committed to delivering excellence and helping you achieve your goals. Let's make it happen together!
          </p>
          <p>
            Discover our solutions, explore new opportunities, and take the first step toward your success.
          </p>
          <NavLink to="/contect" className="cta-button">
            Contact Us 
          </NavLink>
        </div>

        {/* Right Image Content */}
        <div className="image-content">
          <img
            src="https://images.pexels.com/photos/672630/pexels-photo-672630.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Illustration or Product"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;



          
