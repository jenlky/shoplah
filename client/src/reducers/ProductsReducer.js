import * as actionTypes from '../actions/actions';

const initialState = {
  products: [],
  num: [],
  item: [],
  qty: [],
  status: ''
};

const ProductsReducer = (state = initialState, action) => {
  let updatedNum = state.num;
  let updatedItem = state.item;
  let updatedQty = state.qty;
  let index = updatedNum.indexOf(num);

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
        updatedNum = state.num.concat(num); 
        updatedItem = state.item.concat(item);
        updatedQty = state.qty.concat(1);

        return {
          ...state,
          num: updatedNum,
          item: updatedItem,
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

      // when ADD TO CART is clicked, update state. after updating, calculate total price
      this.calculateTotalPrice(updatedNum, updatedQty, updatedItem);

    case actionTypes.REMOVE_FROM_CART:
      // remove clicked item with splice, and update state
      updatedNum.splice(index, 1);
      updatedQty.splice(index, 1);
      updatedItem.splice(index, 1);

      return {
        ...state,
        num: updatedNum,
        item: updatedItem,
        qty: updatedQty
      }

      // when item is removedFromCart, update totalPrice
      this.calculateTotalPrice(updatedNum, updatedQty, updatedItem);

    case actionTypes.HANDLE_CLICK:
      let id = event.currentTarget.id;
      console.log(id);

      if (id === 'plus') {
        updatedQty[index] += 1;
      } else if (id === 'minus') {
        updatedQty[index] -= 1;
      }

      return { 
        qty: updatedQty 
      }
      this.calculateTotalPrice(updatedNum, updatedQty, updatedItem);

    case actionTypes.INPUT_QUANTITY:
      if (regex.test(event.target.value)) {
        updatedQty[index] = Number(event.target.value);
        return { 
          qty: updatedQty 
        }
        this.calculateTotalPrice(updatedNum, updatedQty, updatedItem);
      }

    default: 
      return state;
  }
}

export default ProductsReducer;