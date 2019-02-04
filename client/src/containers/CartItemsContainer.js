import React from 'react';
import { connect } from 'react-redux';
import RemoveFromCart from '../actions/RemoveFromCart';
import InputQuantity from '../actions/InputQuantity';
import HandleClick from '../actions/HandleClick';
import CartItems from '../components/CartItems';

const CartItemsContainer = ({ removeFromCart, inputQuantity, handleClick }) => (
  <CartItems 
    removeFromCart={removeFromCart} 
    inputQuantity={inputQuantity} 
    handleClick={handleClick} 
  />
)

const mapDispatchToProps = dispatch => ({
  removeFromCart: (num, cartItem) => dispatch(RemoveFromCart(num, cartItem)),
  inputQuantity: (event, num) => dispatch(InputQuantity(event, num)),
  handleClick: (event, num) => dispatch(HandleClick(event, num)),
});

export default connect(null, mapDispatchToProps)(CartItemsContainer);