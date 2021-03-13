import React from 'react';
import { makeStyles } from '@material-ui/core';

import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';

import { removeProductFromCart } from '../../redux/actions/cart';
import QuantityContainer from '../QuantityContainer/QuantityContainer';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    margin: '12px 0px',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    minWidth: 200,
    backgroundPosition: 'top',
    [theme.breakpoints.down('sm')]: {
      minWidth: 100,
      height: 100,
    },
  },
  productTitle: {
    [theme.breakpoints.down('sm')]: {
      fontSize: 16,
    },
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      position: 'relative',
    },
  },

  quantity: {
    [theme.breakpoints.down('sm')]: {
      position: 'absolute',
      left: '-110px',
    },
  },
}));

function SingleProductCard({ product, removeProduct }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        image={product.gallery[0]}
        title="Live from space album cover"
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5" className={classes.productTitle}>
            {product.title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Size: <span className="bold"> {product.currentSize} </span>
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Price:
            <span className="bold">
              {` ${product.price.current_price} ${product.price.currency} | `}
            </span>
            <small className="lightGreen bold">
              Saving {` ${product.price.savings_amount} ${product.price.currency}`}
            </small>
          </Typography>
        </CardContent>
        <div className={classes.controls}>
          <QuantityContainer product={product} classNames={classes.quantity} />
          <CardActions>
            <Button
              variant="text"
              startIcon={<DeleteIcon />}
              onClick={() => removeProduct(product)}
            >
              Remove
            </Button>
          </CardActions>
        </div>
      </div>
    </Card>
  );
}

const mapDispatchToProps = {
  removeProduct: removeProductFromCart,
};

export default connect(null, mapDispatchToProps)(SingleProductCard);
