import { makeStyles } from '@material-ui/core';
import React from 'react';
import Slider from 'react-slick';
import sliderImage1 from '../../assets/slider-img-1.webp';
import sliderImage2 from '../../assets/slider-img-2.webp';
import sliderImage1Mobile from '../../assets/sliderImage1mobile.png';
import sliderImage2Mobile from '../../assets/sliderImage2mobile.png';

const useStyles = makeStyles(theme => ({
  sliderImage: {
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '50vh',
    cursor: 'pointer',
  },
  sliderImage1: {
    backgroundImage: `url(${sliderImage1})`,
    [theme.breakpoints.down('sm')]: {
      backgroundImage: `url(${sliderImage1Mobile})`,
    },
  },
  sliderImage2: {
    backgroundImage: `url(${sliderImage2})`,
    [theme.breakpoints.down('sm')]: {
      backgroundImage: `url(${sliderImage2Mobile})`,
    },
  },
}));

const AppImageSlider = () => {
  const classes = useStyles();
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
        <div className={`${classes.sliderImage} ${classes.sliderImage1}`} />
      </div>
      <div>
        <div className={`${classes.sliderImage} ${classes.sliderImage2}`} />
      </div>
    </Slider>
  );
};

export default AppImageSlider;
