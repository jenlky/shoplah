import UpdateStore from './UpdateStore';

const AddToCart = (id) => {
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
    .then(res => res.json())
    .then(res => dispatch(UpdateStore(res)))
    .catch(error => console.log(error));
  }
};

export default AddToCart;