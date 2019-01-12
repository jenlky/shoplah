import * as actionTypes from './actions';

const FetchProductsSuccess = (products) => ({
    type: actionTypes.FETCH_PRODUCTS_SUCCESS,
    status: 'success',
    products: products
});

export default FetchProductsSuccess;