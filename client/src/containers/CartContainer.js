import React from 'react';
import { connect } from 'react-redux';
import Cart from '../components/Cart';
import RemoveProduct from '../actions/RemoveProduct';
import UpdateCart from '../actions/UpdateCart';

const CartContainer = ({ idArray, qtyArray, products, removeProduct, updateCart }) => (
  <Cart 
    idArray={idArray} 
    qtyArray={qtyArray} 
    products={products}
    removeProduct={removeProduct}
    updateCart={updateCart}
  />
);

const mapStateToProps = state => ({
  idArray: state.productsReducer.id,
  qtyArray: state.productsReducer.qty,
  products: state.productsReducer.products
});

const mapDispatchToProps = dispatch => ({
  removeProduct: (id) => dispatch(RemoveProduct(id)),
  updateCart: (event, id) => dispatch(UpdateCart(event, id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);