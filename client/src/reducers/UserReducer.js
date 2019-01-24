import * as actionTypes from '../actions/actions';

const initialState = {
  username: '',
  userID: '',
  thumbnail: '',
  isLoggedIn: false
};

// Action: FetchUser
const UserReducer = (state = initialState, action) => {
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

export default UserReducer;