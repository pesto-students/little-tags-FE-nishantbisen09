import * as actionTypes from '../actionTypes';

// eslint-disable-next-line import/prefer-default-export
export const addAddress = addresses => dispatch => {
  dispatch({ type: actionTypes.ADD_ADDRESS, addresses });
};

export const updateAddress = payload => dispatch => {
  dispatch({ type: actionTypes.UPDATE_ADDRESS, payload });
};

export const deleteAddress = id => dispatch => {
  dispatch({ type: actionTypes.DELETE_ADDRESS, id });
};

export const setDefaultAddress = id => dispatch => {
  dispatch({ type: actionTypes.SET_DEFAULT_ADDRESS, id });
};
