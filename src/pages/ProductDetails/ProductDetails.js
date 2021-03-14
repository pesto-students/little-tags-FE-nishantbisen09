/* eslint-disable react/style-prop-object */
import { Button, Container, Grid, Paper } from '@material-ui/core';
import { ShoppingBasket, Star } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import { FormattedMessage, FormattedNumber } from 'react-intl';
import { connect } from 'react-redux';
import isEqual from 'lodash/isEqual';
import findIndex from 'lodash/findIndex';
import { useHistory } from 'react-router-dom';
import SimilarProducts from '../../components/SimilarProducts/SimilarProducts';
import SizeContainer from '../../components/SizeContainer/SizeContainer';
import products from '../../data/products';
import useStyles from './ProductDetailsStyles';
import fuseSearch from '../../components/Search/FuseSearch';
import { addProductToCart } from '../../redux/actions/cart';
import { useGoogleAuth } from '../../components/Auth/GoogleAuthProvider';
import { openLoginModal } from '../../redux/actions/loginModal';

const ProductDetails = props => {
  const { match, addToCart, cart, loginModalOpen } = props;
  const { isSignedIn } = useGoogleAuth();

  const classes = useStyles();
  const history = useHistory();
  const [productDetails, setProductDetails] = useState({});
  const [isAlreadyInCart, setIsAlreadyInCart] = useState(false);

  const { gallery, description, title, reviews, sizes = [], price, category } = productDetails;
  const [currentSize, setCurrentSize] = useState(sizes[0] || 'XS');
  const productID = match.params.id;

  const fetchProductDetails = () => {
    const details = products.find(({ id: itemID }) => itemID === props.match.params.id);
    setProductDetails(details);
  };

  useEffect(() => {
    fetchProductDetails();
  }, [productID]);

  useEffect(() => {
    const index = findIndex(cart, product =>
      isEqual(product, { ...productDetails, currentSize, quantity: product.quantity })
    );

    if (index > -1) {
      setIsAlreadyInCart(true);
    } else {
      setIsAlreadyInCart(false);
    }
  }, [productDetails, currentSize, cart]);

  const getSimilarProducts = () => {
    return fuseSearch(['category'])
      .search(category)
      .map(({ item }) => item)
      .filter(({ id }) => id !== productID);
  };

  const addItemToCart = () => {
    //! UNTIL TESTING IS dONE - BELOW CODE IS IMPORTANT
    // if (!isSignedIn) {
    //   loginModalOpen();
    //   return;
    // }

    const productToCart = {
      ...productDetails,
      currentSize,
      quantity: 1,
    };
    addToCart(productToCart);
  };

  const handleBuy = () => {
    addItemToCart();
    if (isSignedIn) {
      history.push('/cart');
    }
  };

  return productDetails.title ? (
    <>
      <Container maxWidth="lg" className={classes.container}>
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
                    <SizeContainer value={currentSize} sizes={sizes} onClick={setCurrentSize} />
                  </Grid>
                </Grid>

                <Grid container spacing={3} justify="flex-start">
                  <Grid item xs={12} md="auto">
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.actionBtn}
                      onClick={handleBuy}
                    >
                      <FormattedMessage id="buyNow" />
                    </Button>
                  </Grid>
                  <Grid item xs={12} md="auto">
                    {isAlreadyInCart ? (
                      <Button
                        variant="outlined"
                        color="secondary"
                        className={classes.actionBtn}
                        onClick={() => history.push('/checkout')}
                      >
                        <ShoppingBasket className={classes.addToCart} />{' '}
                        <FormattedMessage id="goToCart" />
                      </Button>
                    ) : (
                      <Button
                        variant="outlined"
                        color="secondary"
                        className={classes.actionBtn}
                        onClick={addItemToCart}
                      >
                        <ShoppingBasket className={classes.addToCart} />{' '}
                        <FormattedMessage id="addToCart" />
                      </Button>
                    )}
                  </Grid>
                </Grid>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="lg">
        <Grid container justify="center">
          <Grid item xs={12} className={classes.similarProducts}>
            <SimilarProducts products={getSimilarProducts()} />
          </Grid>
        </Grid>
      </Container>
    </>
  ) : (
    <></>
  );
};

const mapDispatchToProps = {
  addToCart: addProductToCart,
  loginModalOpen: openLoginModal,
};

const mapStateToProps = state => ({
  cart: state.cart,
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
