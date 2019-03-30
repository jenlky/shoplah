import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductInfo extends Component {
  handleClick = (event) => {
    // console.log('event', event.currentTarget);
    // console.log('data-event', event.currentTarget.dataset.event);
    const { isLoggedIn, id, containsId, addProduct, updateCart, togglePopup } = this.props;

    switch (isLoggedIn) {
      case true:
        togglePopup();
        // I can add some transition css to mimic the Shopee look
        //setTimeout(() => togglePopup(), 3000);

        if (!containsId) {
          return addProduct(id);
        } 
        return updateCart(event.currentTarget.dataset.event, id);

      case false:
        if (process.env.NODE_ENV === 'development') {
          window.location.href = 'http://localhost:8080/auth/login';
        } else {
          window.location.href = 'https://jenlky-shopping-cart.herokuapp.com/auth/login';
        }
        break;

      default:
    }
  }

  render() {
    const { name, price } = this.props;
    return (
      <div className='product-info'>
        <div className='product-text'>
          <p>{name}</p>      
          <p>{"$" + price.toLocaleString('en-US', { minimumFractionDigits: 2 })}</p>
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