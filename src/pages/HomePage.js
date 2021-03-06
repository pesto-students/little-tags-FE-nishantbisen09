import React from 'react';
import AppImageSlider from '../components/AppImageSlider/AppImageSlider';
import Categories from '../components/Categories/Categories';
import FeaturedAdd from '../components/FeaturedAd/FeaturedAd';
import Products from '../components/Products/Products';
import topCategories from '../data/categories';
import products from '../data/products';

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
