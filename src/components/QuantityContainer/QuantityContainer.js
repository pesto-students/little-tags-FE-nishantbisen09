import React from 'react';
import { makeStyles } from '@material-ui/core';
import RemoveCircleOutlineOutlinedIcon from '@material-ui/icons/RemoveCircleOutlineOutlined';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import { connect } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import { updateProductQuantity } from '../../redux/actions/cart';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    width: '150px',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginLeft: '5px',
  },
}));

function QuantityContainer({ product, productQuantityUpdate, classNames }) {
  const { quantity } = product;
  const classes = useStyles();

  return (
    <div className={`${classes.root} ${classNames}`}>
      <IconButton
        aria-label="remove"
        onClick={() => quantity > 1 && productQuantityUpdate(product, quantity - 1)}
      >
        <RemoveCircleOutlineOutlinedIcon />
      </IconButton>
      <span className={classes.quantity}>{quantity}</span>

      <IconButton aria-label="add" onClick={() => productQuantityUpdate(product, quantity + 1)}>
        <AddCircleOutlineOutlinedIcon />
      </IconButton>
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
