import React from 'react';
import Navbar from './Navbar';
import ProductsContainer from '../containers/ProductsContainer';
import ShoppingCartContainer from '../containers/ShoppingCartContainer';

const MainPage = ({ store }) => {
  console.log(store.getState());

  return (
    <main>
      <Navbar />
      <ProductsContainer />
      <ShoppingCartContainer />
    </main>
  );
};

export default MainPage;