import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getCartCount } from '../redux/selectors/cartSelectors';

const Navbar = () => {
  const cartCount = useSelector(getCartCount);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <div className="brand-content">
            <h1><i className="fas fa-seedling"></i> Paradise Nursery</h1>
            <p className="brand-tagline">Where Green Meets Serenity</p>
          </div>
        </Link>
        <div className="navbar-links">
          <Link to="/shop" className="nav-link">
            <i className="fas fa-store"></i> Plants
          </Link>
          <Link to="/cart" className="cart-link">
            <i className="fas fa-shopping-cart"></i>
            <span className="cart-badge">{cartCount}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

