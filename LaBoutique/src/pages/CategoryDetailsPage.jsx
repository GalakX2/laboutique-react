import React from 'react';
import { useParams } from 'react-router';
import produitsData from '../data/produits.json';
import ProductCard from '../composants/ProductCard';

const CategoryDetailsPage = () => {
  // Récupère la partie dynamique de la route (:id)
  const { id } = useParams(); 

  // Filtrer les produits par categorieId
  const categoryProducts = produitsData.filter(produit => produit.categorieId === id);

  // Mise en forme du nom pour l'affichage (ex: 'vetements' -> 'Vetements')
  const categoryName = id.charAt(0).toUpperCase() + id.slice(1); 

  return (
    <div className="category-details-page container">
      <h1>Produits de la catégorie : {categoryName}</h1>
      
      {categoryProducts.length > 0 ? (
        <div className="product-list">
          {categoryProducts.map(produit => (
            <ProductCard key={produit.id} produit={produit} /> 
          ))}
        </div>
      ) : (
        <p>Aucun produit trouvé dans cette catégorie.</p>
      )}
    </div>
  );
};

export default CategoryDetailsPage;