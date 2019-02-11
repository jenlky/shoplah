import * as actionTypes from './actions';

const CalculatePrice = (id, qty) => ({
  type: actionTypes.CALCULATE_PRICE,
  id, 
  qty
});

export default CalculatePrice;