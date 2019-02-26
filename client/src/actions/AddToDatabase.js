//import * as actionTypes from './actions';
import AddToCart from './AddToCart';

const AddToDatabase = (id) => {
  return (dispatch) => {
    fetch(`/api/cart/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json' 
      }
    })
    .catch(error => console.log(error))
    .then(res => {
      try {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
      } catch(error) {
        console.log(error);
      }
    })
    .then(res => res.json())
    .then(() => dispatch(AddToCart(id)))
    .catch(error => console.log(error));
  }
};

export default AddToDatabase;