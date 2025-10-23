import React from 'react';
import { Link } from 'react-router';

const CategoryCard = ({ categorie }) => {
  // Le chemin redirige vers /categorie/ID_DE_LA_CATEGORIE
  return (
    <Link to={`/categorie/${categorie.id}`} className="category-link">
      <div className="category-card">
        <h3>{categorie.nom}</h3>
        <p>({categorie.count} produits)</p>
      </div>
    </Link>
  );
};

export default CategoryCard;