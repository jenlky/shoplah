import React from 'react';
import PropTypes from 'prop-types';

const CartTotal = ({ totalPrice }) => {
  if (totalPrice > 0) {
    return (
      <div className='shoplah-total'>
        <span className='total-price'>
          { '$ ' + totalPrice.toLocaleString('en-US', { minimumFractionDigits: 2 }) }
        </span>
        <button className='checkout'>Checkout</button>
      </div>
    );
  } else {
    return null;
  }
};

CartTotal.propTypes = {
  totalPrice: PropTypes.number.isRequired
};

export default CartTotal;