import React, { Component} from 'react';
import { connect } from 'react-redux';
import RemoveFromCart from '../actions/RemoveFromCart';
import InputQuantity from '../actions/InputQuantity';
import HandleClick from '../actions/HandleClick';
import CalculatePrice from '../actions/CalculatePrice';
import ShoppingCart from '../components/ShoppingCart';

class ShoppingCartContainer extends Component {
  render() {
    return (
      <ShoppingCart 
        num={this.props.num} cartItem={this.props.cartItem} 
        qty={this.props.qty} totalPrice={this.props.totalPrice}
        removeFromCart={this.props.removeFromCart} 
        inputQuantity={this.props.inputQuantity} handleClick={this.props.handleClick}
      />
    );
  }
}

// Actions: CalculatePrice, InputQuantity, HandleClick, RemoveFromCart
const mapStateToProps = state => ({
  num: state.num,
  cartItem: state.cartItem,
  qty: state.qty,
  totalPrice: state.totalPrice
});

const mapDispatchToProps = dispatch => ({
  RemoveFromCart: (num, cartItem) => dispatch(RemoveFromCart(num, cartItem)),
  InputQuantity: (event, num) => dispatch(InputQuantity(event, num)),
  HandleClick: (event, num) => dispatch(HandleClick(event, num)),
  CalculatePrice: (num, qty, cartItem) => dispatch(CalculatePrice(num, qty, cartItem))
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartContainer);