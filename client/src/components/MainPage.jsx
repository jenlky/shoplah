import React from 'react';
import Navbar from './Navbar';
import Products from './Products';
import ShoppingCart from './ShoppingCart';

const MainPage = () => {
  //console.log(store.getState());

  return (
    <main>
      <Navbar />
      <Products />
      <ShoppingCart />
    </main>
  );
}

export default MainPage;