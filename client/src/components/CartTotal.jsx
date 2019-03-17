import React from 'react';
import PropTypes from 'prop-types';

const CartTotal = ({ totalPrice }) => {
  if (totalPrice > 0) {
    return (
      <div className='shoplah-total'>
        <span>Total</span>
        <span className='total-price shoplah-right'>
          { '$ ' + totalPrice.toLocaleString('en-US', { minimumFractionDigits: 2 }) }
        </span>
        <button className='checkout shoplah-right'>Check Out</button>
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