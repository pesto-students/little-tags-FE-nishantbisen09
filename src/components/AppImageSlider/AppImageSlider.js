import React from 'react';
import Slider from 'react-slick';
import sliderImage1 from '../../assets/slider-img-1.webp';
import sliderImage2 from '../../assets/slider-img-2.webp';
import './appImageSlider.css';

const sliderImageDesktopStyles = {
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  height: '50vh',
  cursor: 'pointer',
};

const AppImageSlider = () => {
  return (
    <Slider
      dots
      infinite
      speed={500}
      slidesToShow={1}
      slidesToScroll={1}
      arrows={false}
      autoplay
      autoplaySpeed={3000}
    >
      <div>
        <div
          style={{
            backgroundImage: `url(${sliderImage1})`,
            ...sliderImageDesktopStyles,
          }}
        />
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
