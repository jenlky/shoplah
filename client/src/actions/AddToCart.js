import * as actionTypes from './actions';

const AddToCart = (num, product) => ({
  type: actionTypes.ADD_TO_CART,
  num,
  product
});

export default AddToCart;