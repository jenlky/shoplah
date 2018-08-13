import React, { Component } from 'react';

export default class ShoppingCartItems extends Component {

  handleClick = () => {
    this.props.removeFromCart(this.props.num);
  }

  render() {
    let item = this.props.item;
    let num = this.props.num;
    let qty = this.props.qty;

    // if a product was clicked return a row of product, else return null
    if (num.length !== 0) {
      return (
        <div className='shopping-cart-items'>
          <div className='shopping-cart-product'>
            <i className='far fa-window-close shopping-cart-cancel' onClick={this.handleClick}></i>
            <div className='product-details'>
              <img className='shopping-cart-img' src={item.image} alt={item.name} />
              <span>Product {num}</span>
            </div>    
          </div>
          <span>{'$ ' + item.price}</span>
          <input className='item-input-qty' readOnly value={qty} type="text"/>
          <span>{'$ ' + (qty * item.price).toFixed(2)}</span>
        </div>
      );
    } else {
      return null;
    }
  }
}
