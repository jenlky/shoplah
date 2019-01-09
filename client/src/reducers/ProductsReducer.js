import * as actionTypes from '../actions/actionTypes';

const initialState = {
  products: [],
  num: [],
  item: [],
  qty: []
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.FETCH_PRODUCTS:
      return {
        
      }

    case actionTypes.ADD_TO_CART:
      return {
        
      }

    case actionTypes.REMOVE_FROM_CART:
      return {
      
      }

    case actionTypes.HANDLE_CLICK:
      return {
      
      }

    case actionTypes.INPUT_QUANTITY:
      return {
      
      }

    default: 
      return state;
  }
}
