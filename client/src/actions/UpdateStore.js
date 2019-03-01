import * as actionTypes from './actions';

const UpdateStore = (res) => ({
  type: actionTypes.UPDATE_STORE,
  payload: { ...res } 
})

export default UpdateStore;