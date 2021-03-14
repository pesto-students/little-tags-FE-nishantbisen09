import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { Divider, makeStyles } from '@material-ui/core';
import OrderHistoryList from './OrderHistoryList';

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
function OrderHistoryPage() {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Grid container justify="center" spacing={3}>
        <Grid item xs={12}>
          <h2 className={classes.columnTitle}>Order History</h2>
          <Divider />
          <OrderHistoryList />
        </Grid>
      </Grid>
    </Container>
  );
}

export default OrderHistoryPage;
