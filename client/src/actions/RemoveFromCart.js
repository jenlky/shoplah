import * as actionTypes from './actions';

const RemoveFromCart = (id) => ({
  type: actionTypes.REMOVE_FROM_CART,
  id
});

export default RemoveFromCart;