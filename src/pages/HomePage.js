import React from 'react';
import AppImageSlider from '../components/AppImageSlider/AppImageSlider';
import Categories from '../components/Categories/Categories';

import mens from '../assets/images/categories/mens.png';
import womens from '../assets/images/categories/womens.png';
import jewellery from '../assets/images/categories/jewellery.png';
import electronics from '../assets/images/categories/electronics.png';
import accessories from '../assets/images/categories/accessories.png';
import FeaturedAdd from '../components/FeaturedAdd/FeaturedAdd';

const topCategories = [
  {
    id: 1,
    name: "Men's Clothing",
    imageUrl: mens,
  },
  {
    id: 2,
    name: "Women's Clothing",
    imageUrl: womens,
  },
  {
    id: 3,
    name: 'Jewellery',
    imageUrl: jewellery,
  },
  {
    id: 4,
    name: 'Electronics',
    imageUrl: electronics,
  },
  {
    id: 5,
    name: 'Accessories',
    imageUrl: accessories,
  },
];
function HomePage() {
  return (
    <>
      <AppImageSlider />
      <Categories categories={topCategories} />
      <FeaturedAdd />
    </>
  );
}

export default HomePage;