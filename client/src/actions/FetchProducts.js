import FetchProductsRequest from './FetchProductsRequest';
import FetchProductsSuccess from './FetchProductsSuccess';

const FetchProducts = () =>  {
  return (dispatch) => {
    dispatch(FetchProductsRequest());
    fetch('/products')
      .then(res => res.json())
      .then(res => dispatch(FetchProductsSuccess(res)))
      .catch(err => console.log(err));
  }
};

export default FetchProducts;

/*
const FetchState = () => {
  return(dispatch) => {
      fetch('/api/categories', {
          method: 'GET',
          headers: {
              'content-type': 'application/json'
          }
      })
      .then(res => res.json())
      .then(res => dispatch(FetchSuccess(res)))
      .catch(err => console.log(err))
      dispatch(FetchRequest());
  }
}
export default FetchState;
*/