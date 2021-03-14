/* eslint-disable import/prefer-default-export */
import * as actionTypes from '../actionTypes';

export const addProductsToOrderHistory = orders => dispatch => {
  const ordersToAdd = orders.map(order => {
    return {
      ...order,
      created_at: new Date(),
    };
  });

  dispatch({ type: actionTypes.ADD_ITEMS_TO_ORDER_HISTORY, ordersToAdd });
};
