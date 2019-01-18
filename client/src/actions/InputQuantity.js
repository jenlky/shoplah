import * as actionTypes from './actions';

const InputQuantity = (event, num) => ({
  type: actionTypes.ADD_TO_CART,
  event,
  num
});

export default InputQuantity;