import React, { Component } from 'react';
import minus from '../assets/minus.svg';
import plus from '../assets/plus.svg';

export default class ShoppingCartItems extends Component {

  removeFromCart = () => {
    this.props.removeFromCart(this.props.num);
  }

  handleClick(event) {
    this.props.handleClick(event, this.props.num);
  }

  render() {
    let item = this.props.item;
    let num = this.props.num;
    let qty = this.props.qty;

    // if a product was clicked return a row of product, else return null
    if (num.length !== 0 && qty > 0) {
      return (
        <div className='shoplah-items'> 
          <div className='shoplah-product'>
            <i className='far fa-window-close shoplah-cancel' onClick={this.removeFromCart}></i>
            <div className='product-details'>
              <img className='shoplah-img' src={item.image} alt={item.name} />
              <span>Product {num}</span>
            </div>
          </div>
          <span>{'$ ' + item.price}</span>
          <div className='shoplah-qty'>
            <button className='shoplah-btn-outline' onClick={(e) => this.handleClick(e)}>
              <img src={minus} alt="Minus sign" />
            </button>
            <input className='shoplah-btn-outline shoplah-input' value={this.props.qty} onChange={this.inputChange} type="text"/>
            <button className='shoplah-btn-outline' onClick={(e) => this.handleClick(e)}>
              <img src={plus} alt="Plus sign" />
            </button>
          </div>
          <span>{'$ ' + (qty * item.price).toFixed(2)}</span>
        </div>
      );
    } else {
      return null;
    }
  }
}
