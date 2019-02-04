import * as actionTypes from '../actions/actions';

const initialState = {
  user: '',
  userID: '',
  thumbnail: '',
  isLoggedIn: false
};

// Action: FetchUser
const userReducer = (state = initialState, action) => {
  //const payload = Object.assign({}, action.payload);

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

export default userReducer;