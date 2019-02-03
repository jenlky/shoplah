import React, { Component} from 'react';
import { connect } from 'react-redux';
import RemoveFromCart from '../actions/RemoveFromCart';
import InputQuantity from '../actions/InputQuantity';
import HandleClick from '../actions/HandleClick';
import CalculatePrice from '../actions/CalculatePrice';
import ShoppingCart from '../components/ShoppingCart';
import PriceReducer from '../reducers/PriceReducer';

class ShoppingCartContainer extends Component {
  render() {
    if (!this.props.num || !this.props.qty) {
      return null;
    }

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

// Actions: InputQuantity, HandleClick, RemoveFromCart
const mapStateToProps = state => ({
  num: state.ProductsReducer.num,
  cartItem: state.ProductsReducer.cartItem,
  qty: state.ProductsReducer.qty,
  totalPrice: PriceReducer(state.PriceReducer.totalPrice, CalculatePrice)
});

const mapDispatchToProps = dispatch => ({
  RemoveFromCart: (num, cartItem) => dispatch(RemoveFromCart(num, cartItem)),
  InputQuantity: (event, num) => dispatch(InputQuantity(event, num)),
  HandleClick: (event, num) => dispatch(HandleClick(event, num)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartContainer);