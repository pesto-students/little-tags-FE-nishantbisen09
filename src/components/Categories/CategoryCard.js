import React from 'react';

const CategoryCard = ({ name, image }) => {
  return (
    <div className="category-card-container">
      <div className="card-image" style={{ backgroundImage: `url(${image})` }} />
      <h4>{name}</h4>
    </div>
  );
};

export default CategoryCard;
