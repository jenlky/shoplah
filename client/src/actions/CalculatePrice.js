import * as actionTypes from './actions';

const CalculatePrice = (productId, qty) => ({
  type: actionTypes.CALCULATE_PRICE,
  productId, 
  qty
});

export default CalculatePrice;