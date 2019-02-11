import * as actionTypes from '../actions/actions';

const initialState = {
  products: [],
  productsId: [],
  qty: [],
  totalPrice: 0,
  status: ''
};

const productsReducer = (state = initialState, action) => {
  let updatedId = [...state.productsId];
  let updatedQty = [...state.qty];
  let index = updatedId.indexOf(action.id);

  /*
  console.log('updatedId:', updatedId);
  console.log('index:', index); */

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
      // if productsId array doesn't have that element, insert that element
      if (!state.productsId.includes(action.id)) {
        updatedId = state.productsId.concat(action.id); 
        updatedQty = state.qty.concat(1);

        return {
          ...state,
          productsId: updatedId,
          qty: updatedQty
        }
      // if element is present in array already, increase qty of it by 1
      } else {
        updatedQty = state.qty.slice(0);
        updatedQty[index] += 1;
        
        return {
          ...state,
          qty: updatedQty
        }
      }

      // After updating store, use CalculatePrice action to calculate updated price.
      this.calculateTotalPrice(updatedId, updatedQty);

    case actionTypes.REMOVE_FROM_CART:
      // remove clicked item with splice, and update state
      updatedId.splice(index, 1);
      updatedQty.splice(index, 1);

      return {
        ...state,
        productsId: updatedId,
        qty: updatedQty
      }
      this.calculateTotalPrice(updatedId, updatedQty);

    case actionTypes.HANDLE_CLICK:
      if (action.event === 'plus') {
        updatedQty[index] += 1;
      } else if (action.event === 'minus') {
        updatedQty[index] -= 1;
      }

      return {
        ...state,
        qty: updatedQty 
      }
      this.calculateTotalPrice(updatedId, updatedQty);

    case actionTypes.INPUT_QUANTITY:
      const regex = /^[0-9\b]+$/;

      if (regex.test(action.value)) {
        updatedQty[index] = Number(action.value);

        return {
          ...state,
          qty: updatedQty 
        }
        this.calculateTotalPrice(updatedId, updatedQty);
      }

    case actionTypes.CALCULATE_PRICE:
      let arr = [];
      console.log('updatedId', action.id);

      action.productsId.map(id => {
        let index = id - 1;
        arr.push(action.qty[index] * state.products[index].price);
      });

      if (arr.length > 0) {
        let total = arr.reduce((acc, currentVal) => acc + currentVal);
        return { 
          totalPrice: total 
        }
      } 

      return { 
        totalPrice: 0 
      }

    default: 
      return state;
  }
}

export default productsReducer;