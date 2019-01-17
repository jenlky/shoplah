import * as actionTypes from './actions';

let num = 0;
const AddToCart = (num, product) => ({
  type: actionTypes.ADD_TO_CART,
  num: num++,
  product
});

export default AddToCart;