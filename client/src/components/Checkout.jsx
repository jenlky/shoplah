import React from 'react';
import Navbar from './Navbar';
import CartContainer from '../containers/CartContainer';

const CartPage = () => {
  return (
    <main>
      <Navbar />
      <CartContainer />
      <p>Testing Checkout page</p>
    </main>   
  );
}

export default CartPage;