import React from 'react';
import { FormattedMessage } from 'react-intl';
import AppImageSlider from '../components/AppImageSlider/AppImageSlider';
import Categories from '../components/Categories/Categories';
import FeaturedAdd from '../components/FeaturedAd/FeaturedAd';
import Products from '../components/Products/Products';
import topCategories from '../data/categories';
import products from '../data/products';

function HomePage() {
  const getFeaturedProducts = () => products.filter(({ featured }) => featured);

  return (
    <>
      <AppImageSlider />
      <Categories categories={topCategories} />
      <FeaturedAdd />
      <Products
        className="featured-products"
        position="center"
        heading={<FormattedMessage id="featuredProducts" />}
        products={getFeaturedProducts()}
        spacing={8}
      />
    </>
  );
}

export default HomePage;
