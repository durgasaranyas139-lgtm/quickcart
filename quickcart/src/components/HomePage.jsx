import React from 'react';
import ProductList from './ProductList';

function HomePage({ products, onAddToCart, searchTerm }) {

  // Filter products based on search
  const filteredProducts = products.filter(p =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home-page">
      
      {/* Show result count */}
      {searchTerm && (
        <p>Found {filteredProducts.length} products</p>
      )}

      {/* Show products */}
      <ProductList 
        products={filteredProducts}
        onAddToCart={onAddToCart}
      />

      {/* If nothing found */}
      {filteredProducts.length === 0 && (
        <p>No products found</p>
      )}
    </div>
  );
}

export default HomePage;