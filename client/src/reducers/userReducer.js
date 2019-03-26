import * as actionTypes from '../actions/actions';

const initialState = {
  user: '',
  userID: '',
  picture: '',
  isLoggedIn: false
};

// Action: FetchUser
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_USER:
      return {
        ...state,
        ...action.payload
      }

    case actionTypes.LOGOUT_USER:
      action.asyncDispatch({
        type: actionTypes.UPDATE_STORE,
        payload: {
          id: [],
          qty: [],
          numOfItems: 0,
          totalPrice: 0,
        }
      });

      return {
        ...state,
        ...action.payload
      } 

    default: 
      return state;
  }
}

export default userReducer;
