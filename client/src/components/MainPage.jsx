import React from 'react';
import Navbar from './Navbar';
import Products from './Products';
import ShoppingCart from './ShoppingCart';

const MainPage = ({ store }) => {
  console.log(store.getState());

  return (
    <main>
      <Navbar isLoggedIn={store.isLoggedIn} />
      <Products store={store} />
      <ShoppingCart store={store} />
    </main>
  );
}

export default MainPage;