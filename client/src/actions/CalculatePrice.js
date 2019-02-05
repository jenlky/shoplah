import * as actionTypes from './actions';

const CalculatePrice = (num, qty) => ({
  type: actionTypes.CALCULATE_PRICE,
  num, 
  qty
});

export default CalculatePrice;