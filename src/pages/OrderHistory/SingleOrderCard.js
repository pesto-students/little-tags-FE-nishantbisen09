import React from 'react';
import { makeStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import StarRateIcon from '@material-ui/icons/StarRate';

const dateFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };

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
  orderTitle: {
    [theme.breakpoints.down('sm')]: {
      fontSize: 16,
    },
  },
  orderDetail: {
    fontWeight: '700',
    [theme.breakpoints.down('sm')]: {
      display: 'inline-block',
    },
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'row',
      position: 'relative',
    },
  },

  quantity: {
    [theme.breakpoints.down('sm')]: {
      position: 'absolute',
      left: '-85px',
    },
  },
}));

function SingleOrderCard({ order }) {
  const classes = useStyles();

  // eslint-disable-next-line no-unused-vars
  const rateAndReview = () => {
    // console.info(currentOrder, 'currentOrder');
  };

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        image={order.gallery[0]}
        title="Live from space album cover"
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5" className={classes.orderTitle}>
            {order.title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Size: <span className={classes.orderDetail}> {order.currentSize} </span>
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Price:
            <span className={classes.orderDetail}>
              {` ${order.price.current_price} ${order.price.currency} | `}
              <small className="lightGreen bold">
                Saved {` ${order.price.savings_amount} ${order.price.currency}`}
              </small>
            </span>
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Order date:{` `}
            <span className={classes.orderDetail}>
              {order.created_at.toLocaleDateString('en-US', dateFormatOptions)}
            </span>
          </Typography>
        </CardContent>
        <div className={classes.controls}>
          <div className={classes.quantity}>Quantity: {order.quantity}</div>
          <CardActions>
            <Button
              variant="text"
              color="primary"
              startIcon={<StarRateIcon />}
              disabled
              onClick={() => rateAndReview(order)}
            >
              Rate & review
            </Button>
          </CardActions>
        </div>
      </div>
    </Card>
  );
}

export default SingleOrderCard;
