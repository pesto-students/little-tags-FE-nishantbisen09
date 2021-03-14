import isEqual from 'lodash/isEqual';
import findIndex from 'lodash/findIndex';

import * as actionTypes from '../actionTypes';

const initialState = [];

const cart = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ITEM_TO_CART: {
      const index = findIndex(state, product => isEqual(product, action.productToAdd));

      if (index > -1) {
        return state;
      }

      return [...state, action.productToAdd];
    }

    case actionTypes.REMOVE_ITEM_FROM_CART: {
      const updatedCart = state.filter(product => !isEqual(product, action.productToRemove));
      return updatedCart;
    }

    case actionTypes.UPDATE_ITEM_QUANTITY: {
      const updatedCart = state.map(product => {
        if (isEqual(product, action.productToUpdate)) {
          return {
            ...action.productToUpdate,
            quantity: action.newQuantity,
          };
        }

        return product;
      });

      return updatedCart;
    }

    case actionTypes.CLEAR_CART: {
      return [];
    }

    default:
      return state;
  }
};

export default cart;
