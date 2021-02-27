import { Button, Grid, Hidden } from '@material-ui/core';
import React from 'react';
import headphoneCover from '../../assets/headphone-cover.png';
import './featuredAdd.css';

const FeaturedAdd = () => {
  return (
    <div className="featured-ad-container">
      <div className="featured-ad">
        <Grid container justify="space-between">
          <div className="ad-description">
            <h1 className="ad-heading">
              Experience your music like <br /> never before
            </h1>
            <p className="ad-subheading">
              If we&apos;re no longer the right solution for you, <br />
              we&apos;ll allow you to export your data at anytime for any reason.
            </p>
            <div className="buy-now-btn">
              <Button variant="contained">BUY NOW</Button>
            </div>
          </div>
          <Hidden xsDown smDown>
            <div className="ad-image-container">
              <img className="ad-image" src={headphoneCover} alt="featured-ad" />
            </div>
          </Hidden>
        </Grid>
      </div>
    </div>
  );
};

export default FeaturedAdd;
