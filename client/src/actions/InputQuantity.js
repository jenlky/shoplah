import * as actionTypes from './actions';

const InputQuantity = (eventType, num) => ({
  type: actionTypes.ADD_TO_CART,
  eventType,
  num
});

export default InputQuantity;