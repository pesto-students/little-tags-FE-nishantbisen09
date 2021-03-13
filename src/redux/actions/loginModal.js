import * as actionTypes from '../actionTypes';

export const openLoginModal = () => dispatch => {
  dispatch({ type: actionTypes.OPEN_LOGIN_MODAL });
};

export const closeLoginModal = () => dispatch => {
  dispatch({ type: actionTypes.CLOSE_LOGIN_MODAL });
};
