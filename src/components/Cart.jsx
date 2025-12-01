import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getCartItems, getCartTotal, getCartCount } from '../redux/selectors/cartSelectors';
import CartItem from './CartItem';

const Cart = () => {
  const cartItems = useSelector(getCartItems);
  const total = useSelector(getCartTotal);
  const totalItems = useSelector(getCartCount);

  const handleCheckout = () => {
    alert('Coming Soon! Checkout functionality will be available soon.');
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-container">
        <h2 className="page-title">Your Shopping Cart</h2>
        <div className="empty-cart">
          <p>Your cart is empty.</p>
          <Link to="/shop" className="continue-shopping-btn">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2 className="page-title">Your Shopping Cart</h2>
      <div className="cart-content">
        <div className="cart-items">
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
        <div className="cart-summary">
          <div className="cart-total">
            <h3>Total Items: {totalItems}</h3>
            <h3>Total Cost: ₹{total.toFixed(2)}</h3>
          </div>
          <div className="cart-actions">
            <Link to="/shop" className="continue-shopping-btn">
              Continue Shopping
            </Link>
            <button className="checkout-btn" onClick={handleCheckout}>
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

