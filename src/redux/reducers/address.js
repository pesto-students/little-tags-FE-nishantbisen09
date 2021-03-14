import * as actionTypes from '../actionTypes';

const initialState = { address: [], currentAddress: '' };
const address = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ADDRESS:
      return { ...state, address: action.addresses };
    case actionTypes.UPDATE_ADDRESS: {
      const newAddresses = state.address.map(addressData => {
        if (addressData.id === action.payload.id)
          return { ...addressData, ...action.payload.address };
        return addressData;
      });
      return { ...state, address: newAddresses };
    }
    case actionTypes.DELETE_ADDRESS: {
      const newAddresses = state.address.filter(({ id }) => id !== action.id);
      return { ...state, address: newAddresses };
    }
    case actionTypes.SET_DEFAULT_ADDRESS: {
      const newAddresses = state.address.map(addressData => {
        if (addressData.id === action.id) return { ...addressData, isDefault: true };
        return { ...addressData, isDefault: false };
      });
      return { ...state, address: newAddresses };
    }

    case actionTypes.SET_CURRENT_ADDRESS:
      return { ...state, currentAddress: action.id };
    default:
      return state;
  }
};

export default address;
