import * as actionTypes from './actions';

const AddToCart = (num) => ({
  type: actionTypes.ADD_TO_CART,
  num
});

export default AddToCart;