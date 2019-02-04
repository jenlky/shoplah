import * as actionTypes from '../actions/actions';

const initialState = {
  products: [],
  num: [],
  cartItem: [],
  qty: [],
  totalPrice: 0,
  status: ''
};

const ProductsReducer = (state = initialState, action) => {
  let updatedNum = state.num;
  let updatedItem = state.cartItem;
  let updatedQty = state.qty;
  let index;
  
  if (action.num !== undefined) {
    index = updatedNum.indexOf(action.num);
  }

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
      // if num array doesn't have that element, insert that element
      if (!state.num.includes(action.num)) {
        updatedNum = state.num.concat(action.num); 
        updatedItem = state.cartItem.concat(action.cartItem);
        updatedQty = state.qty.concat(1);

        return {
          ...state,
          num: updatedNum,
          cartItem: updatedItem,
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
      this.calculateTotalPrice(updatedNum, updatedQty, updatedItem);

    case actionTypes.REMOVE_FROM_CART:
      // remove clicked item with splice, and update state
      updatedNum.splice(index, 1);
      updatedQty.splice(index, 1);
      updatedItem.splice(index, 1);

      return {
        ...state,
        num: updatedNum,
        cartItem: updatedItem,
        qty: updatedQty
      }
      this.calculateTotalPrice(updatedNum, updatedQty, updatedItem);

    case actionTypes.HANDLE_CLICK:
      let id = action.event.currentTarget.id;
      console.log(id);

      if (id === 'plus') {
        updatedQty[index] += 1;
      } else if (id === 'minus') {
        updatedQty[index] -= 1;
      }

      return {
        ...state,
        qty: updatedQty 
      }
      this.calculateTotalPrice(updatedNum, updatedQty, updatedItem);

    case actionTypes.INPUT_QUANTITY:
      const regex = /^[0-9\b]+$/;

      if (regex.test(action.event.target.value)) {
        updatedQty[index] = Number(action.event.target.value);

        return {
          ...state,
          qty: updatedQty 
        }
        this.calculateTotalPrice(updatedNum, updatedQty, updatedItem);
      }

    case actionTypes.CALCULATE_PRICE:
      let arr = [];
      console.log('updatedNum', action.num);

      action.num.map(num => {
        let index = num - 1;
        arr.push(action.qty[index] * action.cartItem[index].price);
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

export default ProductsReducer;