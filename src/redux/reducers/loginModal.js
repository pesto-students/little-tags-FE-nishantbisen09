import * as actionTypes from '../actionTypes';

const initialState = {
  isOpen: false,
};

const loginModal = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.OPEN_LOGIN_MODAL: {
      return {
        isOpen: true,
      };
    }

    case actionTypes.CLOSE_LOGIN_MODAL: {
      return {
        isOpen: false,
      };
    }

    default:
      return state;
  }
};

export default loginModal;
