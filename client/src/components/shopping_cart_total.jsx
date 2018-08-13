import React from 'react';

const ShoppingCartTotal = (props) => {

  if (props.totalPrice !== 0) {
    return (
      <div className='shopping-cart-total'>
        <span className='total-price'>
          {'$ ' + props.totalPrice.toFixed(2)}
        </span>
      </div>
    );
  } else {
    return null;
  }
}

export default ShoppingCartTotal;