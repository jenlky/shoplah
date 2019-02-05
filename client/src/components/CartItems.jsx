import React, { Component } from 'react';
import minus from '../assets/minus.svg';
import plus from '../assets/plus.svg';
import PropTypes from 'prop-types';

class CartItems extends Component {
  removeFromCart = () => {
    this.props.removeFromCart(this.props.num);
  } 

  handleClick = (event) => {
    console.log(event.currentTarget.id);
    this.props.handleClick(event.currentTarget.id, this.props.num);
  }

  handleChange = (event) => {
    console.log(event.currentTarget.id);
    this.props.inputQuantity(event.currentTarget.id, this.props.num);
  }

  render() {
    let product = this.props.product;
    let num = this.props.num;
    let qty = this.props.qty;

    /*
    console.log('CartItems - product:', product);
    console.log('CartItems - num', num);
    console.log('CartItems - qty', qty); */

    // if a product was clicked return a row of product, else return null
    if (num.length !== 0 && qty > 0) {
      return (
        <div className='shoplah-items'> 
          <div className='shoplah-product'>
            <i className='far fa-window-close shoplah-cancel' onClick={this.removeFromCart}></i>
            <div className='product-details'>
              <img className='shoplah-img' src={product.image} alt={product.name} />
              <span>{product.name}</span>
            </div>
          </div>
          <span>{'$ ' + product.price}</span>
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
          <span>{'$ ' + (qty * product.price).toFixed(2)}</span>
        </div>
      );
    } else {
      return null;
    }
  }
} 

export default CartItems;

/*
const CartItems = ({ num, product, qty, removeFromCart, inputQuantity, handleClick }) => {
  // if a product was clicked return a row of product, else return null
  if (num.length !== 0 && qty > 0) {
    return (
      <div className='shoplah-items'> 
        <div className='shoplah-product'>
          <i className='far fa-window-close shoplah-cancel' onClick={removeFromCart}></i>
          <div className='product-details'>
            <img className='shoplah-img' src={product.image} alt={product.name} />
            <span>Product {num}</span>
          </div>
        </div>
        <span>{'$ ' + product.price}</span>
        <div className='shoplah-qty'>
          <button id='minus' className='shoplah-btn-outline' onClick={handleClick}>
            <img src={minus} alt="Minus sign" />
          </button>
          <input className='shoplah-btn-outline shoplah-input' value={qty} onChange={inputQuantity} 
            name='quantity' type="text" />
          <button id='plus' className='shoplah-btn-outline' onClick={handleClick}>
            <img src={plus} alt="Plus sign" />
          </button>
        </div>
        <span>{'$ ' + (qty * product.price).toFixed(2)}</span>
      </div>
    );
  } else {
    return null;
  }
}; */

/*
CartItems.propTypes = {
  num: PropTypes.array.isRequired,
  product: PropTypes.object.isRequired,
  qty: PropTypes.array.isRequired,
  totalPrice: PropTypes.number.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  inputQuantity: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired
}; */