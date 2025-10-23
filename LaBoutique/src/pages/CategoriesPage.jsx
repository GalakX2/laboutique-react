import React from 'react';
import produitsData from '../data/produits.json';
import CategoryCard from '../composants/CategoryCard';

// Fonction utilitaire pour calculer les catégories et le nombre de produits
const prepareCategories = (products) => {
  const categoryCounts = products.reduce((acc, product) => {
    const id = product.categorieId; // Assurez-vous que cette clé est correcte
    acc[id] = (acc[id] || 0) + 1;
    return acc;
  }, {});

  return Object.keys(categoryCounts).map(id => ({
    id: id,
    nom: id.charAt(0).toUpperCase() + id.slice(1), 
    count: categoryCounts[id]
  }));
};

const CategoriesPage = () => {
  const categories = prepareCategories(produitsData);

  return (
    <div className="categories-page container">
      <h1>Liste des Catégories</h1>
      <div className="category-list">
        {categories.map(cat => (
          <CategoryCard key={cat.id} categorie={cat} /> 
        ))}
      </div>
    </div>
  );
};

export default CategoriesPage;