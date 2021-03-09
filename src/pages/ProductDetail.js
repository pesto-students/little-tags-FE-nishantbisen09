/* eslint-disable react/style-prop-object */
import { Button, Container, Grid, makeStyles, Paper } from '@material-ui/core';
import { ShoppingBasket, Star } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import { FormattedMessage, FormattedNumber } from 'react-intl';
import Loader from '../components/Loader/Loader';
import QuantityContainer from '../components/QuantityContainer/QuantityContainer';
import SizeContainer from '../components/SizeContainer/SizeContainer';
import products from '../data/products';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: '50px',
    marginBottom: '50px',
    fontFamily: `'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif`,
  },
  image: {
    height: '100%',
    width: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
  },
  description: {
    maxWidth: '600px',
    marginBottom: 15,
  },
  title: {
    marginBottom: 15,
    [theme.breakpoints.down('md')]: {
      fontSize: '20px',
    },
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
    padding: '20px',
  },
  totalReviews: {
    marginLeft: '20px',
  },
  paper: {
    boxShadow: '0px 3px 1px -2px #3f51b563, 0px 2px 2px 0px #3f51b563, 0px 1px 5px 0px #3f51b563',
  },
  imagePaper: {
    display: 'flex',
    justifyContent: 'center',
    height: '100%',
    [theme.breakpoints.down('md')]: {
      height: '50vh',
      width: '50vh',
    },
  },
  actionBtn: {
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
}));

const ProductDetail = props => {
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
        <Grid item md={3} sm={12}>
          <Paper elevation={2} className={`${classes.paper} ${classes.imagePaper}`}>
            <div className={classes.image} style={{ backgroundImage: `url(${gallery[0]})` }} />
          </Paper>
        </Grid>
        <Grid item md={9} sm={12}>
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

export default ProductDetail;
