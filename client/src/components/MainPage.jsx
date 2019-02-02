import React from 'react';
import NavbarContainer from '../containers/NavbarContainer';
import ProductsContainer from '../containers/ProductsContainer';
import ShoppingCartContainer from '../containers/ShoppingCartContainer';

const MainPage = () => (
  <main>
    <NavbarContainer />
    <ProductsContainer />
    <ShoppingCartContainer />
  </main>
);

export default MainPage;