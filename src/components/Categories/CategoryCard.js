import React from 'react';

const CategoryCard = ({ category }) => {
  const { name, imageUrl } = category;
  return (
    <div className="category-card-container">
      <div className="card-image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <h4>{name}</h4>
    </div>
  );
};

export default CategoryCard;
