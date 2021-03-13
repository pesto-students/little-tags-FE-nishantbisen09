import * as actionTypes from '../actionTypes';

export const addProductToCart = productToAdd => dispatch => {
  dispatch({ type: actionTypes.ADD_ITEM_TO_CART, productToAdd });
};

export const updateProductQuantity = (productToUpdate, newQuantity) => dispatch =>
  dispatch({ type: actionTypes.UPDATE_ITEM_QUANTITY, productToUpdate, newQuantity });

export const removeProductFromCart = productToRemove => dispatch =>
  dispatch({ type: actionTypes.REMOVE_ITEM_FROM_CART, productToRemove });
