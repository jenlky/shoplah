import React from 'react';
import NavbarContainer from '../containers/NavbarContainer';
import ProductsContainer from '../containers/ProductsContainer';
import CartContainer from '../containers/CartContainer';

const MainPage = () => (
  <main>
    <NavbarContainer />
    <ProductsContainer />
    <CartContainer />
  </main>
);

export default MainPage;