import React, { Component } from 'react';
import minus from '../assets/minus.svg';
import plus from '../assets/plus.svg';
import PropTypes from 'prop-types';

class CartItem extends Component {
  removeFromDatabase = () => {
    this.props.removeFromDatabase(this.props.id);
  } 

  handleClick = (event) => {
    this.props.handleClick(event.currentTarget.id, this.props.id);
  }

  handleChange = (event) => {
    this.props.inputQuantity(event.currentTarget.value, this.props.id);
  }

  render() {
    const product = this.props.product;
    const id = this.props.id;
    const qty = this.props.qty;
    const price = product.price.toLocaleString('en-US', { minimumFractionDigits: 2 });

    /*
    console.log('CartItems - product:', product);
    console.log('CartItems - productId:', id);
    console.log('CartItems - qty:', qty); */

    // if a product was clicked return a row of product, else return null
    if (id.length !== 0 && qty > 0) {
      return (
        <div className='shoplah-items'> 
          <div className='shoplah-product'>
            <i className='far fa-window-close shoplah-cancel' onClick={this.removeFromDatabase}></i>
            <div className='product-details'>
              <img className='shoplah-img' src={product.image} alt={product.name} />
              <span>{product.name}</span>
            </div>
          </div>
          <span>{ '$ ' + price }</span>
          <div className='shoplah-qty'>
            <button id='minus' className='shoplah-btn-outline' onClick={(e) => this.handleClick(e)}>
              <img src={minus} alt="Minus sign" />
            </button>
            <input className='shoplah-btn-outline shoplah-input' onChange={(e) => this.handleChange(e)} 
              value={qty} name='quantity' type="text" />
            <button id='plus' className='shoplah-btn-outline' onClick={(e) => this.handleClick(e)}>
              <img src={plus} alt="Plus sign" />
            </button>
          </div>
          <span>{ '$ ' + (qty * product.price).toLocaleString('en-US', { minimumFractionDigits: 2 }) }</span>
        </div>
      );
    } else {
      return null;
    }
  }
} 

CartItem.propTypes = {
  id: PropTypes.number.isRequired,
  product: PropTypes.object.isRequired,
  qty: PropTypes.number.isRequired,
  removeFromDatabase: PropTypes.func.isRequired,
  inputQuantity: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired
}; 

export default CartItem;