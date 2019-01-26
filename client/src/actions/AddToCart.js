import * as actionTypes from './actions';

const AddToCart = (num, cartItem) => ({
  type: actionTypes.ADD_TO_CART,
  num,
  cartItem
});

export default AddToCart;