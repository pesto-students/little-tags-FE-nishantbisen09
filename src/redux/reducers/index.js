import { combineReducers } from 'redux';
import cartReducer from './cart';
import loginModalReducer from './loginModal';

export default combineReducers({ cartReducer, loginModalReducer });
