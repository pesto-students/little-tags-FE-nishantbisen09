import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import { Divider, makeStyles } from '@material-ui/core';
import EmptyCart from '../../components/Cart/EmptyCart';
import SingleProductCard from '../../components/Cart/SingleProductCard';
import BillSummary from '../../components/Cart/BillSummary';

const useStyles = makeStyles(() => ({
  container: {
    marginTop: '20px',
  },

  columnTitle: {
    margin: '8px 0px',
  },
}));

function CartPage({ cart }) {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Grid container justify="center" spacing={3}>
        <Grid item xs={12} md={8}>
          <h2 className={classes.columnTitle}>Shopping Cart</h2>
          <Divider />
          {cart.map(product => (
            <SingleProductCard product={product} />
          ))}
          {cart.length ? null : <EmptyCart />}
        </Grid>
        <Grid item xs={12} md={4}>
          <div style={{ position: 'sticky', top: '20px' }}>
            <h2 className={classes.columnTitle}>Bill Summary</h2>
            <Divider />

            <BillSummary />
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}

const mapStateToProps = state => ({
  cart: state.cartReducer,
});

export default connect(mapStateToProps, null)(CartPage);
