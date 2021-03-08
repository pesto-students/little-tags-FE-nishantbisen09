import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import Product from './Product';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    marginTop: 15,
  },
}));

const Products = ({ products, heading, position, className, spacing }) => {
  const classes = useStyles();
  const history = useHistory();

  const onProductCardClick = id => {
    history.push(`/product-detail/${id}`);
  };

  return (
    <div className={className}>
      <h3 className="featured-products-header">{heading}</h3>
      <Grid container className={classes.root} justify={position} spacing={spacing}>
        {products.map(({ gallery, price, title, ratingCount, id }) => {
          return (
            <Grid key={id} item>
              <Product
                id={id}
                currency={price.currency}
                image={gallery[0]} // this will be removed after implementing image slider here
                price={price.current_price}
                name={title}
                ratingCount={ratingCount}
                onClick={onProductCardClick}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Products;
