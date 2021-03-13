import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  container: {
    minHeight: 200,
  },
}));

function EmptyCart() {
  const classes = useStyles();
  return (
    <Grid
      className={classes.container}
      container
      direction="column"
      justify="center"
      alignItems="center"
    >
      <div>No items in your cart</div>
      <br />
      <Button component={Link} to="/" variant="contained" color="primary">
        Continue shopping
      </Button>
    </Grid>
  );
}

export default EmptyCart;
