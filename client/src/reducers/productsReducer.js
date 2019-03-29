import * as actionTypes from '../actions/actions';

const initialState = {
  products: [],
  id: [],
  qty: [],
  numOfItems: 0,
  totalPrice: 0,
  status: '',
  showPopup: false
};

const productsReducer = (state = initialState, action) => {
  //console.log(state);
  let updatedId = [...state.id];
  let updatedQty = [...state.qty];
  let index = updatedId.indexOf(action.id);

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

    // ProductInfo togglePopup
    case actionTypes.TOGGLE_POPUP:
      return {
        ...state,
        showPopup: !state.showPopup
      }

    // Action creator: FetchFromDatabase - dispatch(UpdateStore())
    case actionTypes.UPDATE_STORE:
      // action.asyncDispatch({ type: actionTypes.CALCULATE_PRICE });
      // console.log(action)

      if (action.payload.numOfItems !== 0 && action.payload.totalPrice !== 0) {
        action.asyncDispatch({ type: actionTypes.CALCULATE_PRICE });
      } 

      return {
        ...state,
        ...action.payload
      }

    // Action creator: AddProduct - dispatch(AddToCart(id))
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
      } 
      break;

    // Action creator: RemoveProduct - dispatch(RemoveFromCart(id))
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

    // Action creator: UpdateCart - dispatch(UpdateQuantity(event, id))
    case actionTypes.UPDATE_QUANTITY:
      action.asyncDispatch({ type: actionTypes.CALCULATE_PRICE });
      const event = action.event;
      const regex = /^[0-9\b]+$/;

      if (event === 'plus') {
        updatedQty[index] += 1;
      } else if (event === 'minus') {
        updatedQty[index] -= 1;
      } else if (regex.test(event) && event !== '0') {
        updatedQty[index] = Number(event);
      }

      if (updatedQty[index] === 0) {
        updatedId.splice(index, 1);
        updatedQty.splice(index, 1);
      }

      return {
        ...state,
        id: updatedId,
        qty: updatedQty
      }

    case actionTypes.CALCULATE_PRICE:
      const eachItemPrice = [];
      //console.log('updatedId:', updatedId);
      //console.log('updatedQty:', updatedQty);
      //console.log('updatedId index:', index);

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
