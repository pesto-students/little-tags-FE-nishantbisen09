import * as actionTypes from '../actionTypes';

const initialState = [];
const address = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ADDRESS:
      return [...action.addresses];
    case actionTypes.UPDATE_ADDRESS: {
      const newState = state.map(addressData => {
        if (addressData.id === action.payload.id)
          return { ...addressData, ...action.payload.address };
        return addressData;
      });
      return newState;
    }
    case actionTypes.DELETE_ADDRESS: {
      const newState = state.filter(({ id }) => id !== action.id);
      return newState;
    }
    case actionTypes.SET_DEFAULT_ADDRESS: {
      const newState = state.map(addressData => {
        if (addressData.id === action.id) return { ...addressData, isDefault: true };
        return { ...addressData, isDefault: false };
      });
      return newState;
    }
    default:
      return state;
  }
};

export default address;
