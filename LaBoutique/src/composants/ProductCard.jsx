import React from 'react';

const ProductCard = ({ produit }) => {
  return (
    <div className="product-card">
      <img src={`/images/${produit.image}`} alt={produit.nom} className="product-image" />
      <div className="product-info">
        <h3>{produit.nom}</h3>
        <p className="product-brand">Marque: {produit.brand}</p>
        <p className="product-description">{produit.description}</p>
        <p className="product-price">{produit.prix.toFixed(2)} €</p>
      </div>
    </div>
  );
};

export default ProductCard;