import React from 'react';
import { connect } from 'react-redux';
import DropdownCart from '../components/DropdownCart';
import RemoveProduct from '../actions/RemoveProduct';

const DropdownContainer = ({ products, idArray, qtyArray, removeProduct, isLoggedIn }) => (
  <DropdownCart 
    products={products} 
    idArray={idArray}
    qtyArray={qtyArray}
    removeProduct={removeProduct}
    isLoggedIn={isLoggedIn}
  />
);

const mapStateToProps = state => ({
  products: state.productsReducer.id.map(id => state.productsReducer.products[id-1]),
  idArray: state.productsReducer.id,
  qtyArray: state.productsReducer.qty,
  isLoggedIn: state.userReducer.isLoggedIn
});

const mapDispatchToProps = dispatch => ({
  removeProduct: (id) => dispatch(RemoveProduct(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(DropdownContainer);