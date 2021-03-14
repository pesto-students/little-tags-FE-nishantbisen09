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
import { openLoginModal } from '../../redux/actions/loginModal';
import { addProductsToOrderHistory } from '../../redux/actions/orderHistoryActions';

const useStyles = makeStyles(theme => ({
  paymentButton: {
    marginTop: theme.spacing(1),
  },
}));

function PaymentProcess({ cart, loginModalOpen, addOrders }) {
  const classes = useStyles();
  const { googleUser, isSignedIn } = useGoogleAuth();
  const history = useHistory();

  const [isProcessing, setIsProcessing] = useState(false);

  const onPaymentCompletion = response => {
    console.log(response, 'response');
    // TODO:
    // Add cart items to orders(redux)
    addOrders(cart);
    // Clear cart
    // emptyCart();
    setIsProcessing(false);
    // Redirect to orders page
    // history.push('/orders');
  };

  const onRazorpayModalClose = () => {
    setIsProcessing(false);
  };

  const startPaymentProcess = () => {
    onPaymentCompletion();
    //! UNTIL TESTING IS dONE - BELOW CODE IS IMPORTANT
    // if (!isSignedIn) {
    //   loginModalOpen();
    //   return;
    // }
    // setIsProcessing(true);
    // payWithRazorPay(cart, googleUser, onPaymentCompletion, onRazorpayModalClose);
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

const mapDispatchToProps = {
  loginModalOpen: openLoginModal,
  addOrders: addProductsToOrderHistory,
};

const mapStateToProps = state => ({
  cart: state.cart,
});

export default connect(mapStateToProps, mapDispatchToProps)(PaymentProcess);
