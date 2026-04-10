import React from 'react';
import { useParams } from 'react-router-dom';
import ProductList from './ProductList';

function CategoryPage({ products, onAddToCart }) {
  // Get category from URL
  const { category } = useParams();

  // Filter products based on category
  const filteredProducts = products.filter(
    p => p.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <div className="category-page">
      <h2>{category} Products</h2>

      {filteredProducts.length === 0 ? (
        <p>No products found in this category</p>
      ) : (
        <ProductList 
          products={filteredProducts}
          onAddToCart={onAddToCart}
        />
      )}
    </div>
  );
}

export default CategoryPage;