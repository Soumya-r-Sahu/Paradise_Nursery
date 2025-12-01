import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions/cartActions';
import { getCartItems } from '../redux/selectors/cartSelectors';

const ProductCard = ({ plant }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(getCartItems);
  
  const isInCart = cartItems.some((item) => item.id === plant.id);

  const handleAddToCart = () => {
    if (!isInCart) {
      dispatch(addToCart(plant));
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

