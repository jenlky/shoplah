import * as actionTypes from '../actions/actions';

const initialState = {
  user: '',
  userID: '',
  thumbnail: '',
  isLoggedIn: false
};

// Action: FetchUser
const user = (state = initialState, action) => {
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

export default user;