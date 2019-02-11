import * as actionTypes from './actions';

const InputQuantity = (value, id) => ({
  type: actionTypes.INPUT_QUANTITY,
  value,
  id
});

export default InputQuantity;