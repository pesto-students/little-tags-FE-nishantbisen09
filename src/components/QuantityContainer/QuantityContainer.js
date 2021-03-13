import React from 'react';
import { Button, makeStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import { updateProductQuantity } from '../../redux/actions/cart';

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

function QuantityContainer({ product, productQuantityUpdate, classNames }) {
  const { quantity } = product;
  const classes = useStyles();

  return (
    <div className={`${classes.root} ${classNames}`}>
      <Button
        variant="contained"
        color="primary"
        className={classes.actionBtn}
        onClick={() => quantity > 1 && productQuantityUpdate(product, quantity - 1)}
      >
        -
      </Button>
      <span className={classes.quantity}>{quantity}</span>
      <Button
        variant="contained"
        color="primary"
        className={classes.actionBtn}
        onClick={() => productQuantityUpdate(product, quantity + 1)}
      >
        +
      </Button>
    </div>
  );
}
const mapDispatchToProps = {
  productQuantityUpdate: updateProductQuantity,
};

const mapStateToProps = state => ({
  cart: state.cartReducer,
});

export default connect(mapStateToProps, mapDispatchToProps)(QuantityContainer);
