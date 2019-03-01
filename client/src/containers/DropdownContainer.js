import React from 'react';
import { connect } from 'react-redux';
import DropdownCart from '../components/DropdownCart';
import RemoveFromCart from '../actions/RemoveFromCart';

const DropdownContainer = ({ products, idArray, qtyArray, removeFromCart, isLoggedIn }) => (
  <DropdownCart 
    products={products} 
    idArray={idArray}
    qtyArray={qtyArray}
    removeFromCart={removeFromCart}
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
  removeFromCart: (id) => dispatch(RemoveFromCart(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(DropdownContainer);