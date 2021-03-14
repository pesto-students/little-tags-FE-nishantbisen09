import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import payWithRazorPay from '../../utilities/payWithRazorPay';
import { useGoogleAuth } from '../../components/Auth/GoogleAuthProvider';

const useStyles = makeStyles(theme => ({
  paymentButton: {
    marginTop: theme.spacing(1),
  },
}));

function PaymentProcess({ cart }) {
  const classes = useStyles();
  const { googleUser } = useGoogleAuth();
  const history = useHistory();

  const [isProcessing, setIsProcessing] = useState(false);

  const onPaymentCompletion = response => {
    console.log(response);
    // TODO:
    // Add cart items to orders(redux)
    // Clear cart
    // Redirect to orders page
    setIsProcessing(false);
    history.push('/orders');
  };

  const onRazorpayModalClose = () => {
    setIsProcessing(false);
  };

  const startPaymentProcess = () => {
    setIsProcessing(true);
    payWithRazorPay(cart, googleUser, onPaymentCompletion, onRazorpayModalClose);
  };

  return (
    <div>
      <div>
        <FormControl component="fieldset">
          <RadioGroup aria-label="payment method" name="payment method" defaultValue="Razorpay">
            <FormControlLabel value="Razorpay" control={<Radio />} label="Razorpay" />
            <FormControlLabel value="Paypal" disabled control={<Radio />} label="Paypal" />
          </RadioGroup>
        </FormControl>
      </div>
      <br />
      <Button
        className={classes.paymentButton}
        disabled={isProcessing}
        size="large"
        variant="contained"
        color="primary"
        onClick={startPaymentProcess}
      >
        {isProcessing ? 'Please wait..' : 'Proceed to Pay'}
      </Button>
    </div>
  );
}

const mapStateToProps = state => ({
  cart: state.cart,
});

export default connect(mapStateToProps, null)(PaymentProcess);
