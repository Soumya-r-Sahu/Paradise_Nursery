import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { getCartCount } = useCart();
  const cartCount = getCartCount();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <h1>🌱 Paradise Nursery</h1>
        </Link>
        <Link to="/cart" className="cart-link">
          <span className="cart-icon">🛒</span>
          <span className="cart-badge">{cartCount}</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

