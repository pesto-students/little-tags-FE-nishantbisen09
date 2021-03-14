/* eslint-disable react/style-prop-object */
import React from 'react';
import { Button, Card, CardContent, CardMedia, Grid, makeStyles } from '@material-ui/core';
import './product.css';
import { FormattedMessage, FormattedNumber } from 'react-intl';
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

const Product = ({
  id,
  image,
  price,
  currency,
  name,
  ratingCount,
  onClick,
  showAddToCartButton,
}) => {
  const classes = useStyles();
  return (
    <Card className={`${classes.root} product-card`} elevation={2} onClick={() => onClick(id)}>
      <FavoriteButton className="fav-btn" isFavorite={false} />
      <CardMedia image={image} className={classes.media} />
      <CardContent className={classes.content}>
        <h4 className="product-name">{name}</h4>
        <div className="product-ratings">{ratingCount}</div>
        <Grid container justify="space-between" alignItems="center">
          <Grid item>
            <span className="product-price">
              <FormattedNumber value={price} style="currency" currency={currency} />
            </span>
          </Grid>
          <Grid item>
            {showAddToCartButton ? (
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={event => event.stopPropagation()}
              >
                <FormattedMessage id="addToCart" />
              </Button>
            ) : (
              <></>
            )}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Product;
