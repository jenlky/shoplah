import * as actionTypes from './actions';

const RemoveFromCart = (num) => ({
  type: actionTypes.ADD_TO_CART,
  num
});

export default RemoveFromCart;