import * as actionTypes from './actions';

const InputQuantity = (eventType, productId) => ({
  type: actionTypes.ADD_TO_CART,
  eventType,
  productId
});

export default InputQuantity;