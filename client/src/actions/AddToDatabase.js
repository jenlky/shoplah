//import * as actionTypes from './actions';
import AddToCart from './AddToCart';

const AddToDatabase = (id) => {
  return (dispatch) => {
    fetch(`/api/cart/id/${id}`, {
      method: 'POST',
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
    .then(() => dispatch(AddToCart(id)))
    .catch(error => console.log(error));
  }
};

export default AddToDatabase;