import React from 'react';
import ProductCard from './ProductCard';
import { plants } from '../data/plants';

const ProductList = () => {
  return (
    <div className="product-list-container">
      <h2 className="page-title">Our Plant Collection</h2>
      <div className="product-grid">
        {plants.map((plant) => (
          <ProductCard key={plant.id} plant={plant} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;

