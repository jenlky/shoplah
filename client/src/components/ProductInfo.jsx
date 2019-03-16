import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductInfo extends Component {
  handleClick = (event) => {
    // console.log('event', event.currentTarget);
    // console.log('data-event', event.currentTarget.dataset.event);

    switch (this.props.isLoggedIn) {
      case true:
        if (!this.props.containsId) {
          return this.props.addProduct(this.props.id);
        } 
          
        return this.props.updateCart(event.currentTarget.dataset.event, this.props.id);

      case false:
        if (process.env.NODE_ENV === 'development') {
          window.location.href = 'http://localhost:8080/auth/login';
        } else {
          window.location.href = 'https://jenlky-shopping-cart.herokuapp.com/auth/login';
        }
        break;
        
      default:
        console.log('this.props.isLoggedIn is not true or false');
    }
  }

  render() {
    return (
      <div className='product-info'>
        <div className='product-text'>
          <p>{this.props.name}</p>      
          <p>{"$" + this.props.price.toLocaleString('en-US', { minimumFractionDigits: 2 })}</p>
        </div>
        <button type='button' data-event='plus' onClick={(e) => this.handleClick(e)}>Add</button>
      </div>
    );
  }
}

ProductInfo.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  addProduct: PropTypes.func.isRequired
};

export default ProductInfo;