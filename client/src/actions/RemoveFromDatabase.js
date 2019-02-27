//import * as actionTypes from './actions';
import RemoveFromCart from './RemoveFromCart';

const RemoveFromDatabase = (id) => {
  return (dispatch) => {
    fetch(`/api/cart/${id}`, {
      method: 'DELETE',
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
      } catch(error) {
        console.log(error);
      }
    })
    //.then(res => res.json())
    .then(() => dispatch(RemoveFromCart(id)))
    .catch(error => console.log(error));
  }
};

export default RemoveFromDatabase;