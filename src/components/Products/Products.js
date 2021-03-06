import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import Product from './Product';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    marginTop: 15,
  },
}));

const Products = ({ products }) => {
  const classes = useStyles();
  const history = useHistory();

  const onProductCardClick = id => {
    history.push(`/product-detail/${id}`);
  };

  return (
    <>
      <h3 className="featured-products-header">
        <FormattedMessage id="featuredProducts" />
      </h3>
      <Grid container className={classes.root} justify="center" spacing={7}>
        {products.map(({ image, price, name, ratingCount, id }) => {
          return (
            <Grid key={id} item>
              <Product
                id={id}
                image={image}
                price={price}
                name={name}
                ratingCount={ratingCount}
                onClick={onProductCardClick}
              />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default Products;
