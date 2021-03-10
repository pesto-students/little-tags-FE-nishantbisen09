/* eslint-disable react/style-prop-object */
import { Button, Container, Grid, Paper } from '@material-ui/core';
import { ShoppingBasket, Star } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import { FormattedMessage, FormattedNumber } from 'react-intl';
import Loader from '../../components/Loader/Loader';
import QuantityContainer from '../../components/QuantityContainer/QuantityContainer';
import SizeContainer from '../../components/SizeContainer/SizeContainer';
import products from '../../data/products';
import useStyles from './ProductDetailsStyles';

const ProductDetails = props => {
  const classes = useStyles();
  const [productDetails, setProductDetails] = useState({});
  const { gallery, description, title, reviews, sizes, price } = productDetails;
  const [currentSize, setCurrentSize] = useState();
  const { match } = props;
  const productID = match.params.id;
  const [isLoading, setIsLoading] = useState(false);
  const fakeLoader = async () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  const fetchProductDetails = () => {
    const details = products.find(({ id }) => id === props.match.params.id);
    setProductDetails(details);
  };

  useEffect(() => {
    fakeLoader();
    fetchProductDetails();
  }, [productID]);

  return productDetails.title ? (
    <Container maxWidth="xl">
      <Grid container justify="center" spacing={3} className={classes.root}>
        <Grid item md={3} lg={3} sm={12}>
          <Paper elevation={2} className={`${classes.paper} ${classes.imagePaper}`}>
            <div className={classes.image} style={{ backgroundImage: `url(${gallery[0]})` }} />
          </Paper>
        </Grid>
        <Grid item md={9} lg={9} sm={12}>
          <Paper elevation={2} className={classes.paper}>
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
                  <FormattedMessage
                    id="totalRatings"
                    values={{ reviewCount: <b>{reviews.total_reviews}</b> }}
                  />
                </small>
              </div>
              <Grid container className={classes.size}>
                <Grid item xs={3} md="auto">
                  <b>
                    <FormattedMessage id="size" />
                  </b>
                </Grid>
                <Grid item xs={9} md="auto">
                  <SizeContainer
                    value={currentSize}
                    sizes={sizes}
                    onClick={sizeValue => setCurrentSize(sizeValue)}
                  />
                </Grid>
              </Grid>
              <Grid container className={classes.quantity} justify="flex-start">
                <Grid item xs={3} md="auto">
                  <b>
                    <FormattedMessage id="quantity" />
                  </b>
                </Grid>
                <Grid item xs={9} md="auto">
                  <QuantityContainer />
                </Grid>
              </Grid>
              <Grid container spacing={3} justify="flex-start">
                <Grid item xs={12} md="auto">
                  <Button variant="contained" color="primary" className={classes.actionBtn}>
                    <FormattedMessage id="buyNow" />
                  </Button>
                </Grid>
                <Grid item xs={12} md="auto">
                  <Button variant="outlined" color="secondary" className={classes.actionBtn}>
                    <ShoppingBasket className={classes.addToCart} />{' '}
                    <FormattedMessage id="addToCart" />
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Paper>
        </Grid>
        <Loader isLoading={isLoading} />
      </Grid>
    </Container>
  ) : (
    <></>
  );
};

export default ProductDetails;
