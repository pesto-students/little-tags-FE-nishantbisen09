import axios from 'axios';
import getPayableAmount from './getPayableAmount';
import loadScript from './loadScript';

const BACKEND_URL = process.env.REACT_APP_BACKEND_API_PATH;

export default async function payWithRazorPay(cart, user, onSuccessCallback, onRazorpayModalClose) {
  const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js');

  const orderDetails = getPayableAmount(cart);

  if (!res) {
    console.error('Razorpay SDK failed to load. Are you online?'); // eslint-disable-line no-console
    return;
  }

  const result = await axios.post(`${BACKEND_URL}/orders`, orderDetails);

  if (!result) {
    console.error('Server error. Are you online?'); // eslint-disable-line no-console
    return;
  }

  // Getting the order details back
  // eslint-disable-next-line camelcase
  const { amount, id: order_id, currency } = result.data;

  const options = {
    key: process.env.REACT_APP_RAZOR_PAY_KEY_ID,
    amount: amount.toString(),
    currency,
    name: user.profileObj.name,
    description: 'Test Transaction',
    // image: appLogo,
    order_id,
    async handler(response) {
      const data = {
        orderCreationId: order_id,
        razorpayPaymentId: response.razorpay_payment_id,
        razorpayOrderId: response.razorpay_order_id,
        razorpaySignature: response.razorpay_signature,
      };

      const paymentResult = await axios.post(`${BACKEND_URL}/success`, data);

      onSuccessCallback(paymentResult.data);
    },

    prefill: {
      name: user.profileObj.name,
      email: user.profileObj.email,
      contact: '9999999999',
    },
    notes: {
      address: 'Femgame Corporate Office',
    },
    theme: {
      color: '#3f51b5',
    },
    modal: {
      ondismiss: onRazorpayModalClose,
    },
  };

  const paymentObject = new window.Razorpay(options);

  paymentObject.open();
}
