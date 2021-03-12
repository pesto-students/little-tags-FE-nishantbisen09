import { Button, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    width: '150px',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginLeft: '5px',
  },
  actionBtn: {
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    minWidth: 0,
    border: '1px solid #0000001f',
    margin: '0 5px',
  },
}));

function QuantityContainer({ quantityState }) {
  const { quantity, setQuantity } = quantityState;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button
        variant="contained"
        color="primary"
        className={classes.actionBtn}
        onClick={() => quantity > 1 && setQuantity(quantity - 1)}
      >
        -
      </Button>
      <span className={classes.quantity}>{quantity}</span>
      <Button
        variant="contained"
        color="primary"
        className={classes.actionBtn}
        onClick={() => setQuantity(quantity + 1)}
      >
        +
      </Button>
    </div>
  );
}

export default QuantityContainer;
