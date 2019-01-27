import React from 'react';
import minus from '../assets/minus.svg';
import plus from '../assets/plus.svg';
import PropTypes from 'prop-types';

/*
export default class ShoppingCartItems extends Component {

  removeFromCart = () => {
    this.props.removeFromCart(this.props.num);
  } 

  handleClick(event) {
    this.props.handleClick(event, this.props.num);
  }

  handleChange(event) {
    this.props.inputQuantity(event, this.props.num);
  }

  render() {
    let item = this.props.cartItem;
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
            <button id='minus' className='shoplah-btn-outline' onClick={(e) => this.handleClick(e)}>
              <img src={minus} alt="Minus sign" />
            </button>
            <input className='shoplah-btn-outline shoplah-input' value={qty} onChange={(e) => this.handleChange(e)} 
              name='quantity' type="text" />
            <button id='plus' className='shoplah-btn-outline' onClick={(e) => this.handleClick(e)}>
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
} */

const ShoppingCartItems = ({ num, item, qty, removeFromCart, inputQuantity, handleClick }) => {
  // if a product was clicked return a row of product, else return null
  if (num.length !== 0 && qty > 0) {
    return (
      <div className='shoplah-items'> 
        <div className='shoplah-product'>
          <i className='far fa-window-close shoplah-cancel' onClick={removeFromCart}></i>
          <div className='product-details'>
            <img className='shoplah-img' src={item.image} alt={item.name} />
            <span>Product {num}</span>
          </div>
        </div>
        <span>{'$ ' + item.price}</span>
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
        <span>{'$ ' + (qty * item.price).toFixed(2)}</span>
      </div>
    );
  } else {
    return null;
  }
};

ShoppingCartItems.PropTypes = {
  num: PropTypes.array.isRequired,
  item: PropTypes.object.isRequired,
  qty: PropTypes.array.isRequired,
  totalPrice: PropTypes.number.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  inputQuantity: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default ShoppingCartItems;