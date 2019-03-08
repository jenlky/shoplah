import * as actionTypes from './actions';

const UpdateCart = (event, id) => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.UPDATE_QUANTITY,
      event, 
      id
    });
    fetch('/api/cart', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json' 
      }, 
      body: JSON.stringify({
        event,
        id
      })
    })
    .then(res => {
      console.log(res);

      try {
        if (!res.ok) {
          throw new Error(res.statusText);
        } 

        return res;
      } catch(error) {
        console.log(error);
      }
    })
    .catch(error => console.log(error));
  }
}

export default UpdateCart;