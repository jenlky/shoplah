import React from 'react';
import { connect } from 'react-redux';
import RemoveFromCart from '../actions/RemoveFromCart';
import InputQuantity from '../actions/InputQuantity';
import HandleClick from '../actions/HandleClick';
import CartItems from '../components/CartItems';
/*
const CartItemsContainer = ({ removeFromCart, inputQuantity, handleClick }) => (
  <CartItems 
    removeFromCart={removeFromCart} 
    inputQuantity={inputQuantity} 
    handleClick={handleClick} 
  />
);

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  removeFromCart: num => dispatch(RemoveFromCart(num)),
  inputQuantity: (event, num) => dispatch(InputQuantity(event, num)),
  handleClick: (event, num) => dispatch(HandleClick(event, num)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartItemsContainer);*/