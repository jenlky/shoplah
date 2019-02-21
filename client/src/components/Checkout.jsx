import React from 'react';
import NavbarContainer from '../containers/NavbarContainer';
import CartContainer from '../containers/CartContainer';

const CartPage = ({ isLoggedIn }) => {
  const redirect = () => {
    window.location.href = 'http://localhost:8080/auth/login';
    // maybe can add spinner while loading
    return null;
  }

  if (isLoggedIn) {
    return (
      <main>
        <NavbarContainer />
        <CartContainer />
        <p>Testing Checkout page</p>
      </main>   
    );
  }
  
  return redirect();
}

export default CartPage;