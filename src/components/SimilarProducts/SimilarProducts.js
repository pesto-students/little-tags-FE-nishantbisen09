import React from 'react';
import Slider from 'react-slick';
import { FormattedMessage } from 'react-intl';
import { useHistory } from 'react-router-dom';
import Product from '../Products/Product';
import './similarProducts.css';

const SimilarProducts = ({ products = [] }) => {
  const sliderSettings = {
    className: 'similar-products',
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const history = useHistory();
  const onProductCardClick = id => {
    history.push(`/product-detail/${id}`);
  };
  return (
    <div>
      <div>
        <h3 className="similar-products-header">
          <FormattedMessage id="similarProducts" />
        </h3>
      </div>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Slider {...sliderSettings}>
        {products.map(({ gallery, price, title, ratingCount, id }) => {
          return (
            <div key={id} className="slide-item">
              <Product
                id={id}
                currency={price.currency}
                image={gallery[0]} // this will be removed after implementing image slider here
                price={price.current_price}
                name={title}
                ratingCount={ratingCount}
                onClick={onProductCardClick}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default SimilarProducts;
