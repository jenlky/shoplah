import React from 'react';

const ShoppingCartTotal = (props) => {

  const redirect = () => {
    // put conditional statement to check if login, logout, or cart
    window.location.href = 'http://localhost:8080/auth/login';
  } 

  if (props.totalPrice > 0) {
    return (
      <div className='shoplah-total'>
        <span className='total-price'>
          {'$ ' + props.totalPrice.toFixed(2)}
        </span>
        <button className='checkout' onClick={redirect}>Checkout</button>
      </div>
    );
  } else {
    return null;
  }
}

export default ShoppingCartTotal;