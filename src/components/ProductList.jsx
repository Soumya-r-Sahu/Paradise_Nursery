import React from 'react';
import ProductCard from './ProductCard';
import { plants } from '../data/plants';

const ProductList = () => {
  // Group plants by category
  const plantsByCategory = plants.reduce((acc, plant) => {
    const category = plant.category || 'Other';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(plant);
    return acc;
  }, {});

  return (
    <div className="product-list-container">
      {Object.entries(plantsByCategory).map(([category, categoryPlants]) => (
        <div key={category} className="category-section">
          <h2 className="category-title">{category} Plants</h2>
          <div className="product-grid">
            {categoryPlants.map((plant) => (
              <ProductCard key={plant.id} plant={plant} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;

