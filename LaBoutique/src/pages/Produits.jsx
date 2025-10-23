import React, { useState } from 'react';
import produitsData from '../data/produits.json';
import ProductCard from '../composants/ProductCard';

const Produits = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Logique de recherche/filtrage
  const filteredProducts = produitsData.filter(produit => {
    const searchString = searchTerm.toLowerCase();
    
    return (
      produit.nom.toLowerCase().includes(searchString) ||
      produit.brand.toLowerCase().includes(searchString) ||
      produit.description.toLowerCase().includes(searchString) ||
      produit.prix.toString().includes(searchString)
    );
  });

  return (
    <div className="products-page container">
      <h1>Catalogue de Produits</h1>
      
      {/* Champ de Recherche */}
      <input
        type="text"
        placeholder="Rechercher (Nom, Marque, Description, Prix...)"
        className="search-input"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="product-list">
        {filteredProducts.map(produit => (
          <ProductCard key={produit.id} produit={produit} />
        ))}
        {filteredProducts.length === 0 && <p>Aucun produit trouvé.</p>}
      </div>
    </div>
  );
};

export default Produits;