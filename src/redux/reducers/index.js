import { combineReducers } from 'redux';
import cartReducer from './cart';
import loginModalReducer from './loginModal';
import addressReducer from './address';
import orderHistoryReducers from './orderHistoryReducers';

export default combineReducers({
  cart: cartReducer,
  loginModal: loginModalReducer,
  address: addressReducer,
  orderHistory: orderHistoryReducers,
});
