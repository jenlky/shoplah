import * as actionTypes from './actions';

const HandleClick = (event, id) => ({
  type: actionTypes.HANDLE_CLICK,
  event,
  id
});

export default HandleClick;