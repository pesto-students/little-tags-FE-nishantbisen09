/* eslint-disable import/prefer-default-export */
import * as actionTypes from '../actionTypes';

export const addProductsToOrderHistory = ordersToAdd => dispatch => {
  console.log(ordersToAdd, 'ordersToAdd');
  dispatch({ type: actionTypes.ADD_ITEMS_TO_ORDER_HISTORY, ordersToAdd });
};
