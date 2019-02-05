import * as actionTypes from './actions';

const HandleClick = (eventType, num) => ({
  type: actionTypes.ADD_TO_CART,
  eventType,
  num
});

export default HandleClick;