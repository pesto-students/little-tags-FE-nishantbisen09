import React from 'react';
import { AppImageSlider, Navbar, Categories } from './components';
import mens from './assets/images/categories/mens.png';
import womens from './assets/images/categories/womens.png';
import jewellery from './assets/images/categories/jewellery.png';
import electronics from './assets/images/categories/electronics.png';
import accessories from './assets/images/categories/accessories.png';

const topCategories = [
  {
    id: 1,
    name: "Men's Clothing",
    image_url: mens,
  },
  {
    id: 2,
    name: "Women's Clothing",
    image_url: womens,
  },
  {
    id: 3,
    name: 'Jewellery',
    image_url: jewellery,
  },
  {
    id: 4,
    name: 'Electronics',
    image_url: electronics,
  },
  {
    id: 5,
    name: 'Accessories',
    image_url: accessories,
  },
];

function App() {
  return (
    <>
      <Navbar />
      <AppImageSlider />
      <Categories categories={topCategories} />
    </>
  );
}

export default App;
