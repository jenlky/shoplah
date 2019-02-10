import * as actionTypes from './actions';

const AddToCart = (productId) => ({
  type: actionTypes.ADD_TO_CART,
  productId
});

export default AddToCart;