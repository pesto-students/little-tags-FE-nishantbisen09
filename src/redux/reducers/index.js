import { combineReducers } from 'redux';
import cart from './cart';
import loginModal from './loginModal';
import address from './address';

export default combineReducers({ cart, loginModal, address });
