import React from 'react';
import NavbarContainer from '../containers/NavbarContainer';
import ProductsContainer from '../containers/ProductsContainer';

const MainPage = () => {
  //console.log(props.location);

  return (
    <main>
      <NavbarContainer />
      <ProductsContainer />
    </main>
  );
}

export default MainPage;