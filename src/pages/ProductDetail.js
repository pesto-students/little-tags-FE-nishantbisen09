/* eslint-disable react/style-prop-object */
import { Button, Grid, makeStyles } from '@material-ui/core';
import { ShoppingBasket, Star } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import { FormattedNumber } from 'react-intl';
import QuantityContainer from '../components/QuantityContainer/QuantityContainer';
import SizeContainer from '../components/SizeContainer/SizeContainer';
import products from '../data/products';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: '50px',
    fontFamily: `'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif`,
  },
  image: {
    height: '400px',
    width: '400px',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    [theme.breakpoints.down('sm')]: {
      height: '300px',
      width: '280px',
    },
  },
  description: {
    maxWidth: '400px',
    marginBottom: 15,
  },
  title: {
    marginBottom: 15,
  },
  price: {
    marginBottom: 15,
  },
  rating: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 15,
  },
  star: {
    color: '#3f51b5',
    fontSize: '20px',
    marginLeft: '5px',
  },
  size: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 15,
  },
  quantity: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 30,
  },
  addToCart: {
    fontSize: '22px',
    marginRight: '8px',
  },
  details: {
    padding: '10px',
  },
  totalReviews: {
    marginLeft: '20px',
  },
}));

const ProductDetail = props => {
  const classes = useStyles();
  const [productDetails, setProductDetails] = useState({});
  const { image, description, title, reviews, sizes, price } = productDetails;
  const [currentSize, setCurrentSize] = useState();

  const fetchProductDetails = () => {
    console.log(props.match.params.id);
    const details = products.find(({ id }) => id === props.match.params.id);
    setProductDetails(details);
  };

  useEffect(() => {
    fetchProductDetails();
  }, []);

  return productDetails.title ? (
    <Grid container justify="center" spacing={10} className={classes.root}>
      <Grid item>
        <div className={classes.image} style={{ backgroundImage: `url(${image})` }} />
      </Grid>
      <Grid item>
        <div className={classes.details}>
          <h1 className={classes.title}>{title}</h1>
          <h3 className={classes.price}>
            {price && (
              <FormattedNumber
                value={price.current_price}
                style="currency"
                currency={price.currency}
              />
            )}
          </h3>
          <div className={classes.description}>
            <p>{description}</p>
          </div>
          <div className={classes.rating}>
            <b>{reviews.rating}</b>
            <Star className={classes.star} />
            <small className={classes.totalReviews}>
              Total <b>{reviews.total_reviews}</b> reviews posted
            </small>
          </div>
          <div className={classes.size}>
            <b>Size </b>
            <SizeContainer
              value={currentSize}
              sizes={sizes}
              onClick={sizeValue => setCurrentSize(sizeValue)}
            />
          </div>
          <div className={classes.quantity}>
            <b>Quantity </b>
            <QuantityContainer />
          </div>
          <Grid container spacing={8} justify="center">
            <Grid item>
              <Button variant="contained" color="primary">
                BUY NOW
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" color="secondary">
                <ShoppingBasket className={classes.addToCart} /> <span>ADD TO CART</span>
              </Button>
            </Grid>
          </Grid>
        </div>
      </Grid>
    </Grid>
  ) : (
    <></>
  );
};

export default ProductDetail;
