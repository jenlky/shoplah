import * as actionTypes from './actions';

const AddProduct = (id) => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.ADD_TO_CART,
      id
    });
    fetch(`/api/cart/id/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json' 
      }
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
};

export default AddProduct;