import React, { Component } from 'react';
import ShoppingCartItems from './shopping_cart_items';
import ShoppingCartTotal from './shopping_cart_total';

export default class ShoppingCart extends Component {

  render() {
    return (
      <div className='shopping-cart'>
        <div className='horizontal-ruler'></div>
        <div className='shopping-cart-menu'>
          <h3>SHOPPING CART - {this.props.qty.length !== 0 ? 
            this.props.qty.reduce((acc, currentVal) => acc + currentVal): '0'} items</h3>
          <div className='shopping-cart-header'>
            <span>Product</span>
            <span>Price</span>
            <span>Quantity</span>
            <span>Total</span>
          </div>
          {this.props.num.map(num => {
            let index = this.props.num.indexOf(num);
            return <ShoppingCartItems num={this.props.num[index]} item={this.props.item[index]} 
              qty={this.props.qty[index]} key={this.props.item[index].name} />;
          })}
          <ShoppingCartTotal item={this.props.item} qty={this.props.qty} />
        </div>
      </div>
    );
  }
}