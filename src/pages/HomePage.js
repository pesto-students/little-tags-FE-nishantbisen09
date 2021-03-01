import React from 'react';
import AppImageSlider from '../components/AppImageSlider/AppImageSlider';
import Categories from '../components/Categories/Categories';

import mens from '../assets/images/categories/mens.png';
import womens from '../assets/images/categories/womens.png';
import jewellery from '../assets/images/categories/jewellery.png';
import electronics from '../assets/images/categories/electronics.png';
import accessories from '../assets/images/categories/accessories.png';
import FeaturedAdd from '../components/FeaturedAd/FeaturedAd';
import Products from '../components/Products/Products';
import hoodie from '../assets/images/products/hoodie.png';
import headphone from '../assets/images/products/headphone.png';
import longCoat from '../assets/images/products/long-coat.png';

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

const products = [
  {
    name: 'Classic Hoodie',
    price: '599',
    rating: 5,
    image: hoodie,
  },
  {
    name: 'Headphones',
    price: '599',
    rating: 5,
    image: headphone,
  },
  {
    name: 'Long Coat',
    price: '599',
    rating: 4,
    image: longCoat,
  },
];

function HomePage() {
  return (
    <>
      <AppImageSlider />
      <Categories categories={topCategories} />
      <FeaturedAdd />
      <Products products={products} />
    </>
  );
}

export default HomePage;
