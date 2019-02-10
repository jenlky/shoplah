import * as actionTypes from './actions';

const RemoveFromCart = (productId) => ({
  type: actionTypes.ADD_TO_CART,
  productId
});

export default RemoveFromCart;