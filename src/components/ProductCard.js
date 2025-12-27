import React from 'react';
import './ProductCard.css';

function ProductCard({ product, onClick }) {
  return (
    <div className="product-card" onClick={onClick}>
      <img src={product.image} alt={product.name} />
      <div className="info">
        <h3>{product.name}</h3>
        <p>₹{product.price}</p>
      </div>
    </div>
  );
}

export default ProductCard;
