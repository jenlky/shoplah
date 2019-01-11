import * as actionTypes from '../actions/ActionTypes';

const initialState = {
  username: '',
  userID: '',
  thumbnail: '',
  isLoggedIn: false
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOGIN_USER:
      return {
        ...state,
        ...action.payload
      }

    case actionTypes.LOGOUT_USER:
      return {
        ...state,
        ...action.payload
      } 

    default: 
      return state;
  }
}