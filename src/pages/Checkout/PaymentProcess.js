import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import payWithRazorPay from '../../utilities/payWithRazorPay';
import { useGoogleAuth } from '../../components/Auth/GoogleAuthProvider';
import { openLoginModal } from '../../redux/actions/loginModal';
import { addProductsToOrderHistory } from '../../redux/actions/orderHistoryActions';
import { clearCart } from '../../redux/actions/cart';
import SuccessModal from './SuccessModal';

const useStyles = makeStyles(theme => ({
  paymentButton: {
    marginTop: theme.spacing(1),
  },
}));

function PaymentProcess({ cart, loginModalOpen, addOrders, emptyCart }) {
  const classes = useStyles();
  const { googleUser, isSignedIn } = useGoogleAuth();

  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const onPaymentCompletion = () => {
    addOrders(cart);
    emptyCart();

    setIsSuccessModalOpen(true);
  };

  const onRazorpayModalClose = () => {
    setIsProcessing(false);
  };

  const startPaymentProcess = () => {
    if (!isSignedIn) {
      loginModalOpen();
      return;
    }
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
      <SuccessModal
        isSuccessModalOpen={isSuccessModalOpen}
        setIsSuccessModalOpen={setIsSuccessModalOpen}
      />
    </div>
  );
}

const mapDispatchToProps = {
  loginModalOpen: openLoginModal,
  addOrders: addProductsToOrderHistory,
  emptyCart: clearCart,
};

const mapStateToProps = state => ({
  cart: state.cart,
});

export default connect(mapStateToProps, mapDispatchToProps)(PaymentProcess);
