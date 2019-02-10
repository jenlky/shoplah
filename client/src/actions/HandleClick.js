import * as actionTypes from './actions';

const HandleClick = (eventType, productId) => ({
  type: actionTypes.ADD_TO_CART,
  eventType,
  productId
});

export default HandleClick;