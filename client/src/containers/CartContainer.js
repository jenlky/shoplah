import React from 'react';
import { connect } from 'react-redux';
import Cart from '../components/Cart';
import productsReducer from '../reducers/productsReducer';
import AddToCart from '../actions/AddToCart';
import RemoveFromCart from '../actions/RemoveFromCart';
import InputQuantity from '../actions/InputQuantity';
import HandleClick from '../actions/HandleClick';

const CartContainer = ({ num, qty, products, removeFromCart, inputQuantity, handleClick }) => (
  <Cart 
    num={num} 
    qty={qty} 
    products={products}
    removeFromCart={removeFromCart}
    inputQuantity={inputQuantity}
    handleClick={handleClick}
  />
);

// AddToCart, RemoveFromCart return updated num, cartItem, qty
// Both HandleClick and InputQuantity action return updated qty

// The action in productsReducer below can only allow AddToCart to change store
// thus when attempting to removeFromCart, handleClick and inputQuantity - it will result in an increase in qty



const mapStateToProps = state => ({
  num: productsReducer(state.productsReducer.num, AddToCart),
  qty: productsReducer(state.productsReducer.qty, AddToCart),
  products: state.productsReducer.products
});

const mapDispatchToProps = dispatch => ({
  removeFromCart: num => dispatch(RemoveFromCart(num)),
  inputQuantity: (event, num) => dispatch(InputQuantity(event, num)),
  handleClick: (event, num) => dispatch(HandleClick(event, num))
});

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);