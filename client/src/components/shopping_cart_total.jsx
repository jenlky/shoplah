import React from 'react';

const ShoppingCartTotal = (props) => {

  if (props.totalPrice > 0) {
    return (
      <div className='shoplah-total'>
        <span className='total-price'>
          {'$ ' + props.totalPrice.toFixed(2)}
        </span>
        <button className='checkout' onClick={props.redirectCart}>Checkout</button>
      </div>
    );
  } else {
    return null;
  }
}

export default ShoppingCartTotal;