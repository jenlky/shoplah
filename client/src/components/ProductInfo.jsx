import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductInfo extends Component {
  handleClick = (event) => {
    console.log('event', event.currentTarget);
    console.log('data-event', event.currentTarget.dataset.event);
    // if user isLoggedIn
    if (this.props.isLoggedIn === true) {
      if (!this.props.containsId) {
        return this.props.addToCart(this.props.id);
      }
      
      return this.props.updateCart(event.currentTarget.dataset.event, this.props.id);
    } else {
      window.location.href = 'http://localhost:8080/auth/login';
    } 
  }

  render() {
    return (
      <div className='product-info'>
        <div>
          <p>{this.props.name}</p>      
          <p>{"$" + this.props.price.toLocaleString('en-US', { minimumFractionDigits: 2 })}</p>
        </div>
        <button data-event='plus' onClick={(e) => this.handleClick(e)}>Add</button>
      </div>
    );
  }
}

/*
const ProductInfo = ({ num, price, addToCart }) => (
  <div className='product-info'>
    <div>
      <p>Product {num}</p>      
      <p>{"$ " + price}</p>
    </div>
    <button onClick={addToCart}>Add</button>
  </div>
);
*/

ProductInfo.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  addToCart: PropTypes.func.isRequired,
  updateCart: PropTypes.func.isRequired,
};

export default ProductInfo;