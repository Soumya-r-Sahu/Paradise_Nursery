import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import CartItem from './CartItem';

const Cart = () => {
  const { cartItems, getCartTotal, clearCart } = useCart();
  const [showSuccess, setShowSuccess] = useState(false);
  const total = getCartTotal();

  const handleCheckout = () => {
    clearCart();
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 5000);
  };

  if (showSuccess) {
    return (
      <div className="checkout-success">
        <div className="success-message">
          <h2>✅ Thank you for shopping with Paradise Nursery!</h2>
          <p>Your order has been placed successfully.</p>
          <Link to="/" className="continue-shopping-btn">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="cart-container">
        <h2 className="page-title">Your Shopping Cart</h2>
        <div className="empty-cart">
          <p>Your cart is empty.</p>
          <Link to="/" className="continue-shopping-btn">
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
            <h3>Total: ${total.toFixed(2)}</h3>
          </div>
          <div className="cart-actions">
            <Link to="/" className="continue-shopping-btn">
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

