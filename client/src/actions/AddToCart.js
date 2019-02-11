import * as actionTypes from './actions';

const AddToCart = (id) => ({
  type: actionTypes.ADD_TO_CART,
  id
});

export default AddToCart;