import UpdateStore from './UpdateStore';

const RemoveFromCart = (id) => {
  return (dispatch) => {
    dispatch(UpdateStore(id));
    fetch(`/api/cart/id/${id}`, {
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
    .catch(error => console.log(error));
  }
};

export default RemoveFromCart;