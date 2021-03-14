import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { Divider, makeStyles } from '@material-ui/core';
import BillSummary from '../../components/Cart/BillSummary';
import CheckoutFlow from './CheckoutFlow';

const useStyles = makeStyles(() => ({
  container: {
    marginTop: '20px',
    marginBottom: '70px',
  },

  columnTitle: {
    margin: '8px 0px',
  },

  billSummary: {
    position: 'sticky',
    top: '20px',
  },
}));

function CheckoutPage() {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Grid container justify="center" spacing={3}>
        <Grid item xs={12} md={8}>
          <h2 className={classes.columnTitle}>Checkout</h2>
          <Divider />
          <CheckoutFlow />
        </Grid>
        <Grid item xs={12} md={4}>
          <div className={classes.billSummary}>
            <h2 className={classes.columnTitle}>Bill Summary</h2>
            <Divider />
            <BillSummary />
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}

export default CheckoutPage;
