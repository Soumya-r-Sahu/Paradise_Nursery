import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ plant }) => {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(plant);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
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
            <span className="original-price">${plant.originalPrice}</span>
          )}
          <span className="current-price">${plant.price}</span>
        </div>
        <button
          className={`add-to-cart-btn ${added ? 'added' : ''}`}
          onClick={handleAddToCart}
        >
          {added ? 'Added to Cart ✓' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

