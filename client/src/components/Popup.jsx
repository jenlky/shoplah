import React from 'react';

const Popup = ({ togglePopup }) => {
  const handleClick = () => {
    togglePopup();
  }

  // onClick={handleClick}
  return (
    <div className='popup-page' >
      <div className='popup-container'>
        Item has been added to your shopping cart
      </div>
    </div>
  );
}

export default Popup;