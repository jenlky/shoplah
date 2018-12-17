import React from 'react';

//<button className='checkout' onClick={props.redirect}>Checkout</button>

const ShoppingCartTotal = (props) => {

  if (props.totalPrice > 0) {
    return (
      <div className='shoplah-total'>
        <span className='total-price'>
          {'$ ' + props.totalPrice.toFixed(2)}
        </span>
        <a href="http://localhost:8080/auth/cart" className='checkout'>Checkout</a>
      </div>
    );
  } else {
    return null;
  }
}

export default ShoppingCartTotal;