import React from 'react';
import { connect } from 'react-redux';
import Cart from '../components/Cart';
import productsReducer from '../reducers/productsReducer';

const CartContainer = ({ num, cartItem, qty }) => (
  <Cart 
    num={num} 
    cartItem={cartItem} 
    qty={qty} 
  />
);

// AddToCart, RemoveFromCart return updated num, cartItem, qty
// Both HandleClick and InputQuantity action return updated qty
const mapStateToProps = state => ({
  num: state.productsReducer.num,
  cartItem: state.productsReducer.cartItem,
  qty: state.productsReducer.qty
});

export default connect(mapStateToProps, null)(CartContainer);