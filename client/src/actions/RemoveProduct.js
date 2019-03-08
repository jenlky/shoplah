import * as actionTypes from './actions';

const RemoveProduct = (id) => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.REMOVE_FROM_CART,
      id
    });
    fetch(`/api/cart/id/${id}`, {
      method: 'DELETE',
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

export default RemoveProduct;