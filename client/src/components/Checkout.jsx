import React from 'react';
import NavbarContainer from '../containers/NavbarContainer';
import CartContainer from '../containers/CartContainer';

const CartPage = () => {
  //console.log(props);

  return (
    <main>
      <NavbarContainer />
      <CartContainer />
    </main>   
  );  
}
  
export default CartPage;