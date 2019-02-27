import * as actionTypes from './actions';

const UpdateDatabase = () => {
  return (dispatch) => {
    fetch('/api/cart', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json' 
      }
    })
    .then(res => {
      try {
        if (!res.ok) {
          throw new Error(res.statusText);
        } 
        
        return res;
      } catch(err) {
        console.log(err);
      }
    })
    .then(res => res.json())
    .then(res => {
      dispatch({
        type: actionTypes.UPDATE_STORE,
        payload: { ...res }
      });
    })
    .catch(error => console.log(error));
  }
}

export default UpdateDatabase;