import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import Product from './Product';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    marginTop: 15,
  },
}));

const Products = ({ products }) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root} justify="center" spacing={7}>
      {products.map(({ image, price, name, ratingCount }) => {
        return (
          <Grid key={name} item>
            <Product image={image} price={price} name={name} ratingCount={ratingCount} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Products;
