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