import React from 'react';
import PropTypes from 'prop-types';

const ShoppingCartTotal = ({ totalPrice }) => {

  const redirect = () => {
    // put conditional statement to check if login, logout, or cart
    window.location.href = 'http://localhost:8080/auth/login';
  } 

  if (totalPrice > 0) {
    return (
      <div className='shoplah-total'>
        <span className='total-price'>
          {'$ ' + totalPrice.toFixed(2)}
        </span>
        <button className='checkout' onClick={redirect}>Checkout</button>
      </div>
    );
  } else {
    return null;
  }
};

ShoppingCartTotal.PropTypes = {
  totalPrice: PropTypes.number.isRequired
};

export default ShoppingCartTotal;