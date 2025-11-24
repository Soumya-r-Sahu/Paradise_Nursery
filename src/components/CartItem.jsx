import React from 'react';
import { useCart } from '../context/CartContext';

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  const handleIncrease = () => {
    updateQuantity(item.id, item.quantity + 1);
  };

  const handleDecrease = () => {
    updateQuantity(item.id, item.quantity - 1);
  };

  const handleRemove = () => {
    removeFromCart(item.id);
  };

  return (
    <div className="cart-item">
      <div className="cart-item-image">
        <img src={item.img} alt={item.name} />
      </div>
      <div className="cart-item-details">
        <h3 className="cart-item-name">{item.name}</h3>
        <p className="cart-item-description">{item.description}</p>
        <div className="cart-item-price">${item.price}</div>
      </div>
      <div className="cart-item-controls">
        <div className="quantity-controls">
          <button
            className="quantity-btn"
            onClick={handleDecrease}
            aria-label="Decrease quantity"
          >
            −
          </button>
          <span className="quantity">{item.quantity}</span>
          <button
            className="quantity-btn"
            onClick={handleIncrease}
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
        <div className="cart-item-total">
          ${(item.price * item.quantity).toFixed(2)}
        </div>
          <button
          className="remove-btn"
          onClick={handleRemove}
          aria-label="Remove item"
        >
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default CartItem;

