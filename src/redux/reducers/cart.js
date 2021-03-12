import * as actionTypes from '../actionTypes';

const initialState = { productIds: [], quantity: {}, totalCartItems: 0 };

const cart = (state = initialState, action) => {
  let productIds = [...state.productIds];
  switch (action.type) {
    case actionTypes.ADD_ITEM_TO_CART:
      if (state.productIds.indexOf(action.id) === -1) productIds.push(action.id);
      return {
        ...state,
        productIds,
        totalCartItems: productIds.length,
        quantity: { ...state.quantity, [action.id]: (state.quantity[action.id] || 0) + 1 },
      };
    case actionTypes.REMOVE_ITEM_FROM_CART:
      productIds = productIds.filter(id => id === action.id);
      return {
        ...state,
        productIds,
        totalCartItems: productIds.length,
      };
    default:
      return { ...state };
  }
};

export default cart;
