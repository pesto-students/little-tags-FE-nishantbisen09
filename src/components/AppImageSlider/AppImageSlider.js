import React from 'react';
import Slider from 'react-slick';
import sliderImage1 from '../../assets/slider-img-1.jpg';
import sliderImage2 from '../../assets/slider-img-2.jpg';
import './appImageSlider.css';

const sliderImageDesktopStyles = {
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  height: '70vh',
};

const AppImageSlider = () => {
  return (
    <Slider dots infinite speed={500} slidesToShow={1} slidesToScroll={1} arrows>
      <div>
        <div
          style={{
            backgroundImage: `url(${sliderImage1})`,
            ...sliderImageDesktopStyles,
          }}
        >
          <div className="advertisement-text-container">
            <span className="advertisement-text">
              Exclusive Summer <br />
              Collection
            </span>
          </div>
        </div>
      </div>
      <div>
        <div
          style={{
            backgroundImage: `url(${sliderImage2})`,
            ...sliderImageDesktopStyles,
          }}
        />
      </div>
    </Slider>
  );
};

export default AppImageSlider;
