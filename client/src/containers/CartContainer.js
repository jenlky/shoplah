import React from 'react';
import { connect } from 'react-redux';
import Cart from '../components/Cart';
import RemoveFromCart from '../actions/RemoveFromCart';
import UpdateCart from '../actions/UpdateCart';

const CartContainer = ({ idArray, qtyArray, products, removeFromCart, updateCart }) => (
  <Cart 
    idArray={idArray} 
    qtyArray={qtyArray} 
    products={products}
    removeFromCart={removeFromCart}
    updateCart={updateCart}
  />
);

const mapStateToProps = state => ({
  idArray: state.productsReducer.id,
  qtyArray: state.productsReducer.qty,
  products: state.productsReducer.products
});

const mapDispatchToProps = dispatch => ({
  removeFromCart: (id) => dispatch(RemoveFromCart(id)),
  updateCart: (event, id) => dispatch(UpdateCart(event, id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);