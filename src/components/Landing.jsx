import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="landing-page">
      <div className="landing-hero">
        <div className="landing-content">
          <h1 className="landing-title">
            <i className="fas fa-seedling"></i> Welcome to Paradise Nursery
          </h1>
          <p className="landing-subtitle">
            Transform your space with nature's beauty
          </p>
          <p className="landing-description">
            Discover our curated collection of premium plants, carefully selected 
            to bring life and freshness to your home. From air-purifying wonders 
            to stunning statement pieces, we have the perfect plant for every space 
            and lifestyle.
          </p>
          <div className="landing-features">
            <div className="feature-item">
              <i className="fas fa-leaf"></i>
              <span>Premium Quality Plants</span>
            </div>
            <div className="feature-item">
              <i className="fas fa-truck"></i>
              <span>Fast Delivery</span>
            </div>
            <div className="feature-item">
              <i className="fas fa-heart"></i>
              <span>Expert Care Tips</span>
            </div>
          </div>
          <Link to="/shop" className="shop-now-btn">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;

