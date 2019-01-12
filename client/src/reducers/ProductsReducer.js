import * as actionTypes from '../actions/actions';

const initialState = {
  products: [],
  num: [],
  item: [],
  qty: [],
  status: ''
};

const ProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PRODUCTS_REQUEST:
      return {
        ...state,
        status: action.status
      }

    case actionTypes.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        status: action.status,
        products: action.products
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

export default ProductsReducer;