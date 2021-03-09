import { Button, Grid, Hidden } from '@material-ui/core';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import headphoneCover from '../../assets/headphone-cover.webp';
import './featuredAd.css';

function FeaturedAd() {
  return (
    <div className="home-featured-ad-container">
      <div className="home-featured-ad">
        <Grid container justify="space-between">
          <div className="home-ad-description">
            <h1 className="home-ad-heading">
              <FormattedMessage id="featuredAdTitle" values={{ lineBreak: <br /> }} />
            </h1>
            <p className="home-ad-subheading">
              If we&apos;re no longer the right solution for you, <br />
              we&apos;ll allow you to export your data at anytime for any reason.
            </p>
            <div className="buy-now-btn">
              <Button variant="contained">BUY NOW</Button>
            </div>
          </div>
          <Hidden xsDown smDown>
            <div className="ad-image-container">
              <img className="ad-image" src={headphoneCover} alt="home-featured-ad" />
            </div>
          </Hidden>
        </Grid>
      </div>
    </div>
  );
}

export default FeaturedAd;
