import isEqual from 'lodash/isEqual';
import findIndex from 'lodash/findIndex';

import * as actionTypes from '../actionTypes';

const initialState = [];

const orderHistoryReducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ITEMS_TO_ORDER_HISTORY: {
      return [...state, ...action.ordersToAdd];
    }

    default:
      return state;
  }
};

export default orderHistoryReducers;
