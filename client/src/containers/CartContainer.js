import React from 'react';
import { connect } from 'react-redux';
import Cart from '../components/Cart';
import ProductsReducer from '../reducers/ProductsReducer';

const CartContainer = ({ num, cartItem, qty }) => (
  <Cart 
    num={num} 
    cartItem={cartItem} 
    qty={qty} 
  />
);

const mapStateToProps = state => ({
  num: state.ProductsReducer.num,
  cartItem: state.ProductsReducer.cartItem,
  qty: state.ProductsReducer.qty
});

export default connect(mapStateToProps, null)(CartContainer);