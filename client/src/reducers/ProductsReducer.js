import * as actionTypes from '../actions/actions';

const initialState = {
  products: [],
  id: [],
  qty: [],
  numOfItems: 0,
  totalPrice: 0,
  status: ''
};

const productsReducer = (state = initialState, action) => {
  let updatedId = [...state.id];
  let updatedQty = [...state.qty];
  let index = updatedId.indexOf(action.id);

  /*
  console.log('updatedId:', updatedId);
  console.log('index:', index); */

  switch (action.type) {
    case actionTypes.UPDATE_STORE:
      action.asyncDispatch({ type: actionTypes.CALCULATE_PRICE });

      return {
        ...state,
        ...action.payload
      }

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
      action.asyncDispatch({ type: actionTypes.CALCULATE_PRICE });

      // if id array doesn't have that element, insert that element
      if (!state.id.includes(action.id)) {
        updatedId = state.id.concat(action.id); 
        updatedQty = state.qty.concat(1);

        return {
          ...state,
          id: updatedId,
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

    case actionTypes.REMOVE_FROM_CART:
      // remove item from updatedID and updatedQty
      updatedId.splice(index, 1);
      updatedQty.splice(index, 1);
      action.asyncDispatch({ type: actionTypes.CALCULATE_PRICE });

      return {
        ...state,
        id: updatedId,
        qty: updatedQty
      }

    case actionTypes.HANDLE_CLICK:
      if (action.event === 'plus') {
        updatedQty[index] += 1;
      } else if (action.event === 'minus') {
        updatedQty[index] -= 1;
      }

      if (updatedQty[index] === 0) {
        action.asyncDispatch({ type: actionTypes.REMOVE_FROM_CART });
      } else {
        action.asyncDispatch({ type: actionTypes.CALCULATE_PRICE });
      }
      
      return {
        ...state,
        id: updatedId,
        qty: updatedQty 
      }

    case actionTypes.INPUT_QUANTITY:
      const regex = /^[0-9\b]+$/;

      if (regex.test(action.value)) {
        if (action.value === '0') {
          action.asyncDispatch({ type: actionTypes.REMOVE_FROM_CART });
        } else {
          updatedQty[index] = Number(action.value);
          action.asyncDispatch({ type: actionTypes.CALCULATE_PRICE });
        }
          
        return {
          ...state,
          id: updatedId,
          qty: updatedQty 
        }
      }

    case actionTypes.CALCULATE_PRICE:
      const eachItemPrice = [];
      console.log('updatedId:', updatedId);
      console.log('updatedQty:', updatedQty);
      console.log('updatedId index:', index);

      updatedId.map((id, index) => {
        // index of the product in products array
        let productIndex = id - 1;
        return eachItemPrice.push(updatedQty[index] * state.products[productIndex].price);
      });

      if (eachItemPrice.length > 0) {
        const total = eachItemPrice.reduce((acc, currentVal) => acc + currentVal);
        const numOfItems = updatedQty.reduce((acc, currentVal) => acc + currentVal);

        return {
          ...state,
          numOfItems: numOfItems, 
          totalPrice: total 
        }
      } 

      return { 
        ...state,
        numOfItems: 0, 
        totalPrice: 0 
      }

    default: 
      return state;
  }
}

export default productsReducer;