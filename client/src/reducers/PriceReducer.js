import * as actionTypes from '../actions/actionTypes';

const initialState = {
  totalPrice: 0
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.CALCULATE_PRICE:
      return {
        
      }

    default: 
      return state;
  }
}