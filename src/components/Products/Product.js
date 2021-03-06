import React from 'react';
import { Button, Card, CardContent, CardMedia, Grid, makeStyles } from '@material-ui/core';
import './product.css';
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
    backgroundColor: '#E8EAF6',
  },
  content: {
    paddingBottom: '16px !important',
  },
}));

const Product = ({ id, image, price, name, ratingCount, onClick }) => {
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
            <span className="product-price">₹{price}</span>
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary" className={classes.button}>
              ADD TO CART
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Product;
