/* eslint-disable react/style-prop-object */
import React from 'react';
import { Card, CardContent, CardMedia, Grid, makeStyles } from '@material-ui/core';
import './product.css';
import { FormattedNumber } from 'react-intl';
import FavoriteButton from './FavoriteButton';

const useStyles = makeStyles(() => ({
  root: {
    width: 300,
    borderRadius: '16px',
    boxShadow: '0 9px 18px 0 rgb(0 0 0 / 10%)',
    position: 'relative',
  },
  button: {
    padding: 7,
    fontSize: 11,
  },
  media: {
    height: 0,
    paddingTop: '85%',
    backgroundSize: 'contain',
    backgroundColor: '#e8eaf6a3',
  },
  content: {
    paddingBottom: '16px !important',
  },
}));

const Product = ({ id, image, price, currency, name, onClick }) => {
  const classes = useStyles();
  return (
    <Card className={`${classes.root} product-card`} elevation={2} onClick={() => onClick(id)}>
      <FavoriteButton className="fav-btn" isFavorite={false} />
      <CardMedia image={image} className={classes.media} />
      <CardContent className={classes.content}>
        <Grid container justify="space-between" alignItems="center">
          <Grid item>
            <h4 className="product-name">{name}</h4>
          </Grid>
          <Grid item>
            <span className="product-price">
              <FormattedNumber value={price} style="currency" currency={currency} />
            </span>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Product;
