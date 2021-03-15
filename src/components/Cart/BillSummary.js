import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const TAX_RATE = 0.18;
const shippingCost = 40;

const CURRENCY = 'INR';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    margin: '12px 0px',
  },
  cell: {
    fontSize: 16,
  },
});

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

function subtotal(items) {
  return items
    .map(({ price, quantity }) => price.current_price * quantity)
    .reduce((sum, i) => sum + i, 0);
}

let invoiceSubtotal = 0;

function BillSummary({ cart }) {
  const classes = useStyles();

  const [summary, setSummary] = useState({
    subtotal: 0,
    shipping: 40,
    tax: 0,
    total: 0,
  });

  useEffect(() => {
    invoiceSubtotal = subtotal(cart);
    const shipping = invoiceSubtotal ? shippingCost : 0;
    const tax = (invoiceSubtotal + shipping) * TAX_RATE;
    const total = invoiceSubtotal + shipping + tax;
    setSummary({
      ...summary,
      shipping,
      subtotal: invoiceSubtotal,
      tax,
      total,
    });
  }, [cart]);
  return (
    <TableContainer component={Paper} className={classes.root} position="fixed">
      <Table className={classes.table} aria-label="spanning table">
        <TableBody>
          <TableRow>
            <TableCell className={classes.cell} colSpan={2}>
              Subtotal
            </TableCell>
            <TableCell className={classes.cell} align="right">
              {ccyFormat(summary.subtotal)}
              {` ${CURRENCY}`}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.cell} colSpan={2}>
              Shipping
            </TableCell>
            <TableCell className={classes.cell} align="right">
              {summary.shipping}
              {` ${CURRENCY}`}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.cell}>Tax</TableCell>
            <TableCell className={classes.cell} align="right">{`${(TAX_RATE * 100).toFixed(
              0
            )} %`}</TableCell>
            <TableCell className={classes.cell} align="right">
              {ccyFormat(summary.tax)}
              {` ${CURRENCY}`}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.cell} colSpan={2}>
              <h3>Total</h3>
            </TableCell>
            <TableCell className={classes.cell} align="right">
              <h3>
                {ccyFormat(summary.total)}
                {` ${CURRENCY}`}
              </h3>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const mapStateToProps = state => ({
  cart: state.cart,
});

export default connect(mapStateToProps, null)(BillSummary);
