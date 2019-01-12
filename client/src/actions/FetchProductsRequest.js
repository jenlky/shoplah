import * as actionTypes from './actions';

const FetchProductsRequest = () => ({
    type: actionTypes.FETCH_PRODUCTS_REQUEST,
    status: 'loading'
});

export default FetchProductsRequest;