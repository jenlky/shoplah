import * as actionTypes from './actions';

const RemoveFromCart = (num, product) => ({
  type: actionTypes.ADD_TO_CART,
  num,
  product
});

export default RemoveFromCart;