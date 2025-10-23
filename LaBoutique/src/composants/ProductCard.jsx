import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={`/images/${product.image}`} alt={product.nom} className="product-image" />
      <div className="product-info">
        <h3>{product.nom}</h3>
        <p className="product-brand">Marque: {product.brand}</p>
        <p className="product-description">{product.description}</p>
        <p className="product-price">{product.price.toFixed(2)} €</p>
      </div>
    </div>
  );
};

export default ProductCard;