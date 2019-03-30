import React from 'react';

const Popup = ({ togglePopup }) => {
  const handleClick = () => {
    togglePopup();
  }

  return (
    <div className='popup-page' onClick={handleClick}>
      <div className='popup-container'>
        Item has been added to your shopping cart
      </div>
    </div>
  );
}

export default Popup;