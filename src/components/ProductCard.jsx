import React from 'react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ plant }) => {
  const { addToCart, cartItems } = useCart();
  
  const isInCart = cartItems.some((item) => item.id === plant.id);

  const handleAddToCart = () => {
    if (!isInCart) {
      addToCart(plant);
    }
  };

  return (
    <div className="product-card">
      {plant.sale && <div className="sale-badge">SALE</div>}
      <div className="product-image">
        <img src={plant.img} alt={plant.name} />
      </div>
      <div className="product-info">
        <h3 className="product-name">{plant.name}</h3>
        <p className="product-description">{plant.description}</p>
        <div className="product-price">
          {plant.sale && plant.originalPrice && (
            <span className="original-price">₹{plant.originalPrice}</span>
          )}
          <span className="current-price">₹{plant.price}</span>
        </div>
        <button
          className={`add-to-cart-btn ${isInCart ? 'added' : ''}`}
          onClick={handleAddToCart}
          disabled={isInCart}
        >
          {isInCart ? 'Added to Cart' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

