import * as actionTypes from '../actionTypes';

export const addItemToCart = id => dispatch => {
  dispatch({ type: actionTypes.ADD_ITEM_TO_CART, id });
};

export const incrementItemQuantity = id => dispatch =>
  dispatch({ type: actionTypes.INCREMENT_ITEM_QUANTITY, id });
