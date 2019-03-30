import React from 'react';
import NavbarContainer from '../containers/NavbarContainer';
import ProductsContainer from '../containers/ProductsContainer';
import PopupContainer from '../containers/PopupContainer';

const MainPage = ({ showPopup }) => {
  //console.log(props.location);

  return (
    <main>
      <NavbarContainer />
      <ProductsContainer />
      {showPopup ? <PopupContainer />
        : null
      }
    </main>
  );
}

export default MainPage;