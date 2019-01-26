import * as actionTypes from './actions';

const RemoveFromCart = (num, cartItem) => ({
  type: actionTypes.ADD_TO_CART,
  num,
  cartItem
});

export default RemoveFromCart;