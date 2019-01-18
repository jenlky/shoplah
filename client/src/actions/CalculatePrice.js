import * as actionTypes from './actions';

const CalculatePrice = (num, qty, cartItem) => ({
  type: actionTypes.CALCULATE_PRICE,
  num, 
  qty,
  cartItem
});

export default CalculatePrice;