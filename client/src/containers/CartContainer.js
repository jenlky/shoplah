import React from 'react';
import { connect } from 'react-redux';
import RemoveProduct from '../actions/RemoveProduct';
import UpdateCart from '../actions/UpdateCart';
import Cart from '../components/Cart';

const CartContainer = ({ ...props }) => (
  <Cart {...props} />
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